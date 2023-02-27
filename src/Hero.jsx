
import NavBar from "./components/NavBar/NavBar";
import PrimeraSeccion from "./components/PrimeraSeccion/PrimeraSeccion"
import SegundaSeccion from "./components/SegundaSeccion/SegundaSeccion"
import './Hero.css';

function Hero() {
  return (
    <body>
      <div>
      <NavBar/>
      </div>
      <main className="main-hero">
        <div class="cont-padre-main">
            <PrimeraSeccion/>
            <SegundaSeccion/>
        </div>
      </main>
    </body>
  );
}
export default Hero;
