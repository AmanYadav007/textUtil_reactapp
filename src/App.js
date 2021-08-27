import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Project from "./components/Project";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const seeAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      seeAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      seeAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Text Utility" home="Home" abouttext="About us" project="Project" contact="Contact" mode={mode} toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">

      <Switch>
          <Route exact path="/about">
            <About name= "About US" mode={mode}/>
          </Route>
          <Route exact path = "/">
          <TextForm seeAlert={seeAlert} head="Enter Text To Analyze" mode={mode}/>
          </Route>
          <Route exact path = "/Project">
          <Project />
          </Route>
          <Route exact path = "/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}
export default App;