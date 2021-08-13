import Question from "./Question";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Quiz = () => {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showAnswers, setShowAnswers] = useState(false)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
            .then((res) => res.json())
            .then((data) => {
                //For the questions that are in the json response, get all the questions and shuffle all of the answers
                const questions = data.results.map((question) => ({
                    ...question,
                    answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
                }))
                setQuestions(questions)
            })
    }, [])

    const handleNextQuestion = () => {
        //When continuing to next question set the current index to the next question number
        setCurrentIndex(currentIndex + 1)

        //When continuing to next question remove the shown answers so that user can guess the next question
        setShowAnswers(false)
    }

    const handleAnswer = (answer) => {
        //Prevent double answers after showing the answers
        if (!showAnswers) {
            //When the answer is correct add a point to the score
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1)
            }
        }

        //Show the answers to the user
        setShowAnswers(true)
    }

    return (
        questions.length > 0 ? (
            <section id="quiz-section">
                <div className="container">
                    {currentIndex >= questions.length ? (
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 ">
                                <h1 className="text-white font-weight-bold">
                                    Your score: {score} / {questions.length}
                                </h1>
                            </div>

                            <div className="col-lg-6 btn-group-vertical">
                                <Link to="/quiz" onClick={() => window.location.reload()}
                                      className="btn-primary mr-3">Try
                                    Again</Link>
                                <Link to="/quizzes" className="btn-primary mr-3">Change Quiz</Link>
                                <Link to="/" className="btn-primary">Home</Link>
                            </div>
                        </div>
                    ) : (
                        <Question data={questions[currentIndex]} questionNr={currentIndex + 1} showAnswers={showAnswers}
                                  handleNextQuestion={handleNextQuestion} handleAnswer={handleAnswer}/>
                    )
                    }
                </div>
            </section>
        ) : (
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-white">Loading question...</h1>
            </div>
        )
    );
};

export default Quiz;
