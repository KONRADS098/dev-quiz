import Home from "./components/Home.js";
import Quizzes from "./components/Quizzes.js";

function App() {
    return (
        <div className="App">
            <div className="content">
                <Home/>
                <Quizzes/>
            </div>
        </div>
    );
}

export default App;
