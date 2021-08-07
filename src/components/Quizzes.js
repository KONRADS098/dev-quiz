import {useState} from "react";

const Quizzes = () => {
    const [quizzes] = useState([
        // {topic: "random", image_path: "../images/topics/random.png", category: "", col_size: "12", id: 1},
        {topic: "html", image_path: "../images/topics/html.png", category: "language", col_size: "6", id: 2},
        {
            topic: "javascript",
            image_path: "../images/topics/javascript.png",
            category: "language",
            col_size: "6",
            id: 3
        },
        {topic: "linux", image_path: "../images/topics/linux.png", category: "operating system", col_size: "6", id: 4},
        {topic: "php", image_path: "../images/topics/php.png", category: "language", col_size: "6", id: 5},
        {topic: "laravel", image_path: "../images/topics/laravel.png", category: "framework", col_size: "6", id: 6},
        {
            topic: "devops",
            image_path: "../images/topics/devops.png",
            category: "development model",
            col_size: "6",
            id: 7
        },
        {topic: "mysql", image_path: "../images/topics/mysql.png", category: "platform", col_size: "6", id: 8},
        {
            topic: "kubernetes",
            image_path: "../images/topics/kubernetes.png",
            category: "platform",
            col_size: "6",
            id: 9
        },
        {topic: "docker", image_path: "../images/topics/docker.png", category: "platform", col_size: "6", id: 10},
        {topic: "wordpress", image_path: "../images/topics/wordpress.png", category: "platform", col_size: "6", id: 11}
    ]);


    //split the object array into chunks, first parameter is the array itself, the second parameter is the size of the desired chunk.
    const chunk = (array, size) =>
        array.reduce((all, one, i) => {
            if (i % size === 0) all.push(array.slice(i, i + size))
            return all
        }, [])

    const chunked = chunk(quizzes, 2)

    return (
        <section id="home-quiz">
            <div className="about-title text-center mb-5">
                <h1 className="text-white">Available Quizzes</h1>
            </div>

            <div className="container">
                {
                    chunked.map(row => (
                        <div className="row">
                            {
                                row.map((col) => (
                                    <div className={`col-lg-${col.col_size} mb-4 topic-option`} data-topic={col.topic}
                                         key={col.id}>
                                        <div className="hover hover-2 text-white rounded">
                                            <img src={col.image_path} alt=""/>
                                            <div className="hover-overlay"/>
                                            <div className="row hover-2-content px-5 py-4">
                                                <h3 className="col hover-2-title text-uppercase font-weight-bold mb-0 order-sm-first">
                                                    <span className="font-weight-light">{col.topic}</span>
                                                    <br/>{col.category}
                                                </h3>
                                                <div className="col hover-2-buttons text-center order-sm-last">
                                                    <button className="btn btn-difficulty btn-success text-uppercase"
                                                            data-difficulty="easy">
                                                        easy
                                                    </button>
                                                    <button
                                                        className="btn btn-difficulty btn-warning ml-2 text-uppercase"
                                                        data-difficulty="medium">medium
                                                    </button>
                                                    <button
                                                        className="btn btn-difficulty btn-danger ml-2 text-uppercase"
                                                        data-difficulty="hard">hard
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
