import {useState} from "react";
import {Link} from "react-router-dom";

const Quizzes = () => {
    const [isDifficultySelected, setIsDifficultySelected] = useState(false);

    const handleShowConfirmButton = () => setIsDifficultySelected(!isDifficultySelected);

    const [quizzes] = useState([
        {topic: "linux", image_path: "../images/topics/linux.png", col_size: "6", category: "operating system", id: 1},
        {topic: "bash", image_path: "../images/topics/bash.png", col_size: "6", category: "application", id: 2},
        {topic: "docker", image_path: "../images/topics/docker.png", col_size: "6", category: "platform", id: 3},
        {topic: "sql", image_path: "../images/topics/sql.png", col_size: "6", category: "language", id: 4},
        {topic: "cms", image_path: "../images/topics/cms.png", col_size: "6", category: "software", id: 5},
        {topic: "devops", image_path: "../images/topics/devops.png", col_size: "6", category: "model", id: 6},
    ]);

    //Split the object array into chunks, slice the original array in to chunks of 2.
    const slicedQuizzes = quizzes.reduce((all, one, i) => {
        const sizeOfChunk = 2;
        if (i % sizeOfChunk === 0) all.push(quizzes.slice(i, i + sizeOfChunk))
        return all
    }, [])

    return (
        <section id="home-quizzes">
            <div className="container">
                <div className="quizzes-title text-center mb-5">
                    <h2>Available Quizzes</h2>
                </div>
                {
                    slicedQuizzes.map(row => (
                        <div className="row">
                            {
                                row.map((col) => (
                                    <div className={`col-lg-${col.col_size} mb-4 topic-option`} data-topic={col.topic}
                                         key={col.id}>
                                        <div className="hover hover-2 text-white rounded">
                                            <img src={col.image_path} alt=""/>
                                            <div className="hover-overlay"/>
                                            <div className="row hover-2-content px-5 py-4">
                                                <h3 className="col hover-2-title text-uppercase font-weight-bold mb-0">
                                                    <span className="font-weight-light">{col.topic}</span>
                                                    <br/>{col.category}
                                                    <br/>
                                                    <br/>
                                                    <Link
                                                        to="/quiz"
                                                        className={`${isDifficultySelected ? '' : 'd-none'} btn btn-confirm btn btn-secondary text-uppercase`}>
                                                        Start Quiz
                                                    </Link>
                                                </h3>
                                                <div className="col hover-2-buttons text-center">
                                                    <button className="btn btn-difficulty btn-success text-uppercase"
                                                            data-difficulty="easy" onClick={handleShowConfirmButton}>
                                                        easy
                                                    </button>
                                                    <button
                                                        className="btn btn-difficulty btn-warning ml-2 text-uppercase"
                                                        data-difficulty="medium" onClick={handleShowConfirmButton}>
                                                        medium
                                                    </button>
                                                    <button
                                                        className="btn btn-difficulty btn-danger ml-2 text-uppercase"
                                                        data-difficulty="hard" onClick={handleShowConfirmButton}>
                                                        hard
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Quizzes;
