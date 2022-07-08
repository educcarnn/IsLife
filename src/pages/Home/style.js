import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;

  background: var(--brancoBackground);
`;

export const Nav = styled.nav`
  display: flex;
  width: 100vw;
  height: 8rem;

  align-items: center;

  background: var(--brancoBackground);
`;

export const ContainerVisual = styled.div`
  width: 100vw;
  /* height: 100vh; */

  display: flex;

  align-items: center;
  justify-content: center;

  background: var(--brancoBackground);
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;

  width: 35rem;
  height: 100%;

  justify-content: space-evenly;

  h1 {
    font-family: "Roboto", serif;
    font-size: 3rem;
    font-weight: bold;

    color: var(--pretoTitles);
  }

  h2 {
    font-family: "Roboto", serif;
    font-size: 2rem;

    color: var(--pretoTitles);

    margin-bottom: 1rem;
  }

  p {
    font-family: "Inter", serif;
    font-size: 1rem;

    color: var(--pretoFont);
  }

  span {
    color: var(--rosa);
  }
`;

export const Menu = styled.div`
  width: 30rem;
  height: 4rem;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  button {
    font-size: 1rem;
  }

  button + button {
    margin-left: 2rem;
  }

  /* background: var(--rosa);
  color: var(--backgroundInputs); */
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 35rem;
  height: 100%;

  align-items: center;

  justify-content: center;

  img {
    width: 34rem;
    height: 90%;
  }
`;
