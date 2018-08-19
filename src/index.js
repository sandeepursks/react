//import React, from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";
import Home from "./components/homePage";
import About from "./components/about/aboutPage";
import Header from "./components/common/header";
import Authors from "./components/authors/authorsPage";

const rootElement = document.getElementById("root");
class App extends Component {
  render() {
    var Child;
    switch (this.props.route) {
      case "about":
        Child = About;
        break;
        case "authors":
        Child = Authors;
        break;
      default:
        Child = Home;
    }
    return (
      <div className="jumbptron">
      <Header/>
        <Child />
        
      </div>
    );
  }
}

//ReactDOM.render(<Home />, rootElement);
//ReactDOM.render(<About />, rootElement);
function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, rootElement);
   }
  var route = window.location.hash.substr(1);
  window.alert(route);
  
  window.addEventListener("hashchange", render);
  render();
