const Question = ({
                      handleNextQuestion,
                      showAnswers,
                      handleAnswer,
                      questionNr,
                      data: {question, correct_answer, answers}
                  }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div id="quiz">
                    <div className="question">
                        <h3>
                            <span className="badge" id="questionNumber">{questionNr}</span>
                            <span id="question">{question}</span>
                        </h3>
                    </div>
                    <ul>
                        {answers.map((answer, index) => {
                            const textColor = showAnswers ? answer === correct_answer ? "text-success" : "text-danger" : ""

                            return (
                                <li onClick={() => handleAnswer(answer)} key={index}>
                                    <input type="radio" id={`option-${index + 1}`} name="selector"/>
                                    <label htmlFor={`option-${index + 1}`}
                                           className={textColor}>{answer}</label>
                                    <div className="check"/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {showAnswers && (
                <div className="col-md-12">
                    <button onClick={handleNextQuestion} className="btn-primary mt-5 text-center">Next</button>
                </div>
            )}
        </div>
    );
};

export default Question;
