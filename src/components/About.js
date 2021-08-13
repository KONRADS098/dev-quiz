import {Link} from "react-router-dom";

const About = () => {
    return (
        <section id="home-about" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-1 about-img">
                        <img src="../images/home-image.png" className="img-fluid animated" alt=""/>
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-1 order-lg-2">
                        <h2>
                            About DevQuiz
                        </h2>
                        <p className="lead mt-3">
                            Although developing is hard, with the courage and enthusiasm to learn new
                            concepts in developing, you will find it a little easier than before.
                            <br/><br/>
                            That's why we provide the quizzes that could give the basic required knowledge in a
                            short
                            time. Moreover, we are offering programming code quizzes that are free of charge. So,
                            hurry and try the quizzes that we have available.
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <Link to="/quizzes" className="btn-get-started">Quizzes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
