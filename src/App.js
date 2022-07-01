import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./component/Home";
import Demo from "./component/Demo";
import Header from "./component/Header";
import About from "./component/About";
import Star from "./component/Star";
import Form from "./component/Form";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/star" component={Star} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
