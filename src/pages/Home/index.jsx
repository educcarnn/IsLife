import logo from "../../img/IsLifeLogo1.png";
import ImgHome from "../../img/DashHome.png";
import Fernando from "../../img/Fernando.jfif";
import Idaline from "../../img/Idaline.jfif";
import Leomar from "../../img/Leomar.jfif";
import Lucas from "../../img/Lucas.jfif";
import Eduardo from "../../img/Eduardo.jfif";
import Herbert from "../../img/Herbert.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useHistory } from "react-router";
import { Container, Logo, WelcomeContainer, Footer } from "./style";
import Typewriter from "typewriter-effect";

function Home() {
  const history = useHistory();

  function goToDash(path) {
    history.push(path);
  }

  return (
    <>
      <Logo>
        <img src={logo} alt="IsLife" />
      </Logo>
      <Container>
        <WelcomeContainer>
          <h1>Seja Bem Vindo (a)</h1>
          <h2>IsLife</h2>
          <div className="typewr">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Quem olha para fora sonha,<br>")
                  .pauseFor(2000)
                  .start()
                  .typeString("quem olha para dentro desperta.<br>")
                  .pauseFor(2000)
                  .start()
                  .typeString('"Carl Jung."')
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>

          <div>
            <button onClick={() => goToDash("/home/doctor")}>
              Sou um médico
            </button>
            <button onClick={() => goToDash("/home/patient")}>
              Sou um paciente
            </button>
          </div>
        </WelcomeContainer>
        <div>
          <img src={ImgHome} alt="Welcome" />
        </div>
      </Container>
      <Footer>
        <h3>Conheça os devs que fizeram esse projeto</h3>
        <ul className="">
          <li className="devs-li">
            <img src={Eduardo} alt="Eduardo" />
            <h2>Eduardo Carneiro</h2>
            <h4>Dev</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus erat, tincidunt nec pulvinar vel, consectetur id tellus.
            </p>
            <div className="icons">
              <AiFillGithub className="github" />
              <AiFillLinkedin className="linkedin" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </li>
          <li>
            <img src={Idaline} alt="Idaline" />
            <h2>Idaline Viana</h2>
            <h4>Dev</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus erat, tincidunt nec pulvinar vel, consectetur id tellus.
            </p>
            <div className="icons">
              <AiFillGithub className="github" />
              <AiFillLinkedin className="linkedin" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </li>
          <li>
            <img src={Fernando} alt="Fernando" />
            <h2>Fernando Lacerda</h2>
            <h4>Dev</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus erat, tincidunt nec pulvinar vel, consectetur id tellus.
            </p>
            <div className="icons">
              <AiFillGithub className="github" />
              <AiFillLinkedin className="linkedin" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </li>
          <li>
            <img src={Herbert} alt="Herbert" />
            <h2>Herbert Sipriano</h2>
            <h4>Dev</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus erat, tincidunt nec pulvinar vel, consectetur id tellus.
            </p>
            <div className="icons">
              <AiFillGithub className="github" />
              <AiFillLinkedin className="linkedin" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </li>
          <li>
            <img src={Leomar} alt="Leomar" />
            <h2>Leomar Paz</h2>
            <h4>Dev</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus erat, tincidunt nec pulvinar vel, consectetur id tellus.
            </p>
            <div className="icons">
              <AiFillGithub className="github" />
              <AiFillLinkedin className="linkedin" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </li>
          <li>
            <img src={Lucas} alt="Lucas" />
            <h2>Lucas Roque</h2>
            <h4>Dev</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus erat, tincidunt nec pulvinar vel, consectetur id tellus.
            </p>
            <div className="icons">
              <AiFillGithub className="github" />
              <AiFillLinkedin className="linkedin" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </li>
        </ul>
      </Footer>
    </>
  );
}

export default Home;
