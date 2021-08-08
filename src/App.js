import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Quizzes from "./components/Quizzes.js";
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
