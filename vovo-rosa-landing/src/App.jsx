import "./App.css";
import AboutUs from "./Pages/About/AboutUs";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div id="vovoRosaDivMain">
      <div className="divAboutUs">
        {/* Seção das descrições e contatos */}
        <AboutUs />
      </div>
      <div className="divMain">
        {/* Imagem com Logo */}
        <Main />
      </div>
    </div>
  );
}

export default App;
