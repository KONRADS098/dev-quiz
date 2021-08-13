import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Quizzes from "./components/Quizzes";
import Quiz from "./components/Quiz";
import About from "./components/About";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Header/>
                            <Home/>
                        </Route>
                        <Route path="/quizzes">
                            <Header/>
                            <Quizzes/>
                        </Route>
                        <Route path="/quiz">
                            <Header/>
                            <Quiz/>
                        </Route>
                        <Route path="/about">
                            <Header/>
                            <About/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
