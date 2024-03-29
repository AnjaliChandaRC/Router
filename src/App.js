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
import FormTwo from "./component/FormTwo";
import Practice from "./component/Practice";
import ColorAnnimation from "./component/ColorAnnimation";
import SliderCard from "./component/SliderCard";
import Annimated from "./component/Annimated";
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/annimation" component={ColorAnnimation} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/star" component={Star} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/formtwo" component={FormTwo} />
        <Route exact path="/slider" component={SliderCard} />
        <Route exact path="/textclr" component={Annimated} />
      </Switch>
    </Router>
  );
}

export default App;
