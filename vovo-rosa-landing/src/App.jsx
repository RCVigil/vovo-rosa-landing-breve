import "./App.css";
import AboutUs from "./Pages/About/AboutUs";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div id="vovoRosaDivMain">
      <div className="divAboutUs">
        <AboutUs />
      </div>
      <div className="divMain">
        <Main />
      </div>
    </div>
  );
}

export default App;
