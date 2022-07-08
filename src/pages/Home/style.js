import styled from "styled-components";

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
  }
`;
