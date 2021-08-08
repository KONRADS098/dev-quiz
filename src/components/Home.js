import {Link} from 'react-router-dom';
import React from "react";
import TypeWriter from "./TypeWriter.js";

const Home = () => {
    return (
        <section id="home-intro" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                        <h1>
                            DevQuiz, the place to test your knowledge on {} <br/>
                            <TypeWriter
                                words={["JavaScript", "MySQL", "BASH", "Laravel", "WordPress", "PHP", "Docker"]}/>
                            {} skills
                        </h1>
                        <p className="lead mt-5 mb-8">Test your coding skills by completing quizzes based on your
                            specialties</p>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <Link to="/quizzes" className="btn-get-started mr-3">Quizzes</Link>
                            <Link to="/about" className="btn-get-started">Learn more</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 intro-img">
                        <img src="../images/home-image.png" className="img-fluid animated" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
