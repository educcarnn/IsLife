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
    console.log('home')
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
        <ul className="ul-container">
          <li className="devs-li">
            <img src={Eduardo} alt="Eduardo" />
            <h2>Eduardo Carneiro</h2>
            <h4>Tech Leader</h4>

            <div className="icons">
              <a href="https://github.com/educcarnn">
                <AiFillGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/eduardo-carneiro-98b21b213/">
                <AiFillLinkedin className="linkedin" />
              </a>
            </div>
          </li>
          <li>
            <img src={Idaline} alt="Idaline" />
            <h2>Idaline Viana</h2>
            <h4>PO</h4>

            <div className="icons">
              <a href="https://github.com/idalineviana">
                <AiFillGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/idaline-viana-5b2643142/">
                <AiFillLinkedin className="linkedin" />
              </a>
            </div>
          </li>
          <li>
            <img src={Fernando} alt="Fernando" />
            <h2>Fernando Lacerda</h2>
            <h4>QA</h4>

            <div className="icons">
              <a href="https://github.com/anjosdelacerda">
                <AiFillGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/fernando-lacerda-935024232/">
                <AiFillLinkedin className="linkedin" />
              </a>
            </div>
          </li>
          <li>
            <img src={Herbert} alt="Herbert" />
            <h2>Herbert Sipriano</h2>
            <h4>Scrum Master</h4>

            <div className="icons">
              <a href="https://github.com/herbertcaiosama">
                <AiFillGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/herbert-sipriano-da-silva-30643667/">
                <AiFillLinkedin className="linkedin" />
              </a>
            </div>
          </li>
          <li className="li-card--devs">
            <img src={Leomar} alt="Leomar" />
            <h2>Leomar Paz</h2>
            <h4>QA</h4>

            <div className="icons">
              <a href="https://github.com/LeomarPaz2022">
                <AiFillGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/leomarpaz/">
                <AiFillLinkedin className="linkedin" />
              </a>
            </div>
          </li>
          <li>
            <img src={Lucas} alt="Lucas" />
            <h2>Lucas Roque</h2>
            <h4>QA</h4>

            <div className="icons">
              <a href="https://github.com/lucasroquesousa">
                <AiFillGithub className="github" />
              </a>
              <a href="https://www.linkedin.com/in/lucas-roque-sousa-5619761b7/">
                <AiFillLinkedin className="linkedin" />
              </a>
            </div>
          </li>
        </ul>
      </Footer>
    </>
  );
}

export default Home;
