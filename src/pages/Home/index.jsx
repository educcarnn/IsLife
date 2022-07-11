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
              <ButtonForm onClick={() => goToDash("/home/doctor")}>
                Sou um profissional
              </ButtonForm>
              <ButtonForm onClick={() => goToDash("/home/patient")}>
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
  );
}

export default Home;
