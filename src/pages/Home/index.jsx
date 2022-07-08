<<<<<<< HEAD
import {
  Container,
  ContainerVisual,
  Menu,
  Welcome,
  ImgContainer,
  Nav,
} from "./style";
import ButtonForm from "../../components/button";

import Logo from "../../img/IsLifeLogo.png";
import ImgHome from "../../img/DashHome.svg";

import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function goToDash(path) {
    history.push(path);
  }

  return (
    <>
      <Container>
        <Nav>
          <div>
            <img src={Logo} alt="IsLife" />
          </div>
        </Nav>
        <ContainerVisual>
          <Welcome>
            <div>
              <h2>Seja bem vindo(a)!</h2>
              <h1>
                Is<span>Life</span>
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              bibendum commodo massa. Donec neque lectus, efficitur nec porta
              non, faucibus quis enim.
            </p>

            <Menu>
              <ButtonForm onClick={() => goToDash("/authdoctor")}>
                Sou um profissional
              </ButtonForm>
              <ButtonForm onClick={() => goToDash("/authpatient")}>
                Sou um cliente
              </ButtonForm>
            </Menu>
          </Welcome>
          <ImgContainer>
            <img src={ImgHome} alt="IsLife" />
          </ImgContainer>
        </ContainerVisual>
      </Container>
    </>
=======
import { ContainerHome, ContentWelcome, ContentImg } from "./style";
import logo from "../../assets/img/logo.png";
import imgHome from "../../assets/img/imgHome.svg";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <ContainerHome>
      <ContentWelcome>
        <div className="div-logo--home">
          <img src={logo} alt="" />
        </div>
        <div className="welcome">
          <h3>Seja Bem Vindo (a)</h3>
          <h2>IsLife</h2>
          <p className="text-line typing-animation">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            eaque iusto numquam omnis? Cum aliquam sequi, vitae sint veniam
            natus repellendus quod ab eius alias. Numquam, non labore. Possimus,
            assumenda.
          </p>
        </div>
        <div className="div-buttons--home">
          <button onClick={() => history.push("/authdoctor")}>
            Sou um profissional
          </button>
          <button onClick={() => history.push("/authpatient")}>
            Sou um cliente
          </button>
        </div>
      </ContentWelcome>
      <ContentImg>
        <img src={imgHome} alt="" />
      </ContentImg>
    </ContainerHome>
>>>>>>> bbf6bf842caad2b3cf2a771ea6ef3b50af71129f
  );
}

export default Home;
