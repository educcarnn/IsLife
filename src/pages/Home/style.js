import styled from "styled-components";

<<<<<<< HEAD
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
=======
export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentWelcome = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  .div-logo--home {
    width: 200px;
    height: 200px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 350px;
    }
  }
  .welcome {
    h3 {
      font-size: 42px;
      font-weight: 700;
      font-family: "Sofia Sans";
      margin-bottom: 25px;
    }
    h2 {
      font-size: 60px;
      font-weight: 700;
      font-family: "Sofia Sans";
      margin-bottom: 25px;
    }
    .text-line {
      font-size: 25px;
      font-weight: 700;
      font-family: "Sofia Sans";
      margin-bottom: 25px;
      overflow: hidden;
    }
  }
  .div-buttons--home {
    display: flex;
    flex-direction: row;
    width: 310px;
    gap: 16px;
  }
  @media (max-width: 800px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .div-logo--home {
      width: 200px;
      height: 200px;
      margin-top: 16px;
      object-fit: contain;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 350px;
    }
  }
`;

export const ContentImg = styled.div`
  width: 500px;

  display: flex;
  img {
    width: 100%;
  }
  @media (max-width: 800px) {
    display: none;
>>>>>>> bbf6bf842caad2b3cf2a771ea6ef3b50af71129f
  }
`;
