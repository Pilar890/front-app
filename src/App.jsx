// import logo from './logo.svg';
import NavBar from "./components/NavBar/NavBar";
import PrimeraSeccion from "./components/PrimeraSeccion/PrimeraSeccion"
import SegundaSeccion from "./components/SegundaSeccion/SegundaSeccion"
import './App.css';

function App() {
  return (
    <body>
      <div>
      <NavBar/>
      </div>
      <main>
        <div class="cont-padre-main">
            <PrimeraSeccion/>
            <SegundaSeccion/>
        </div>
      </main>
    </body>
  );
}
export default App;
