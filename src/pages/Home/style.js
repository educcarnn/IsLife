import styled from "styled-components";

export const Logo = styled.header`
  position: relative;
  top: -100px;

  img {
    width: 375px;
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    top: -110px;
    left: 90px;

    img {
      width: 600px;
      height: 450px;
    }
  }

  @media screen and (min-width: 1024px) {
    top: -60px;
    left: 50px;

    img {
      width: 381px;
      height: 350px;
    }
  }

  @media screen and (min-width: 1280px) {
    top: -50px;
    left: 30px;
  }

  img {
    width: 500px;
  }
`;

export const Container = styled.main`
  button {
    width: 320px;
    height: 65px;
    background-color: #ce2d5d;
    font-weight: 700;
    font-size: 1.7rem;
    color: #ffffff;
    border: none;
    margin-top: 10px;
    margin-left: 28px;
    border-radius: 50px;
    transition: 0.6s;
  }
  & button:hover {
    background-color: #e21955;
    font-size: 1.85rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 760px;
      height: 350px;
      top: 220px;
    }

    button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 560px;
      height: 390px;
      position: relative;
      top: -225px;
      right: 95px;
    }

    button {
      width: 201px;
      height: 47px;
      font-size: 1.188rem;
      margin-right: 5px;
    }
    & button:hover {
      font-size: 1.25rem;
    }

    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: space-between;

      img {
        width: 705px;
        height: 474px;
        top: -255px;
        right: 20px;
      }

      button {
        margin-left: 5px;
      }
    }
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 10px;
  margin-bottom: 30px;
  margin-right: 28px;

  h1 {
    font-size: 2.42rem;
    font-weight: 700;
    line-height: 50px;
  }

  h2 {
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 72px;
    margin-top: 10px;
  }

  p {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 33px;
    margin: 10px 0 20px 0;
    padding: 0 28px 0 70px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    top: 160px;
    margin-bottom: 230px;
  }

  @media screen and (min-width: 1024px) {
    top: -160px;

    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 3.2rem;
      margin-top: 1px;
    }

    p {
      font-size: 1.3rem;
      line-height: 33px;
      margin: 1px 0 10px 0;
      text-align: start;
    }
  }

  @media screen and (min-width: 1280px) {
    top: -110px;

    p {
      font-size: 1.4rem;
      margin-top: 10px;
    }
  }
`;

export const Footer = styled.footer`
  h3 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 33px;
    padding-bottom: 16.5px;
    padding-left: 60px;
    padding-right: 28px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 32px;
    border-top: 1px solid #000000;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 450px;
    background-color: #d9d9d9;
    border-radius: 10px;
    margin: 0 28px 28px 28px;
  }

  img {
    border-radius: 50%;
    margin: 25px 0 16px 0;
  }

  h2 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 36px;
    margin-bottom: 12px;
  }

  h4 {
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 36px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 24px;
    padding: 0 50px 0 50px;
  }

  .icons {
    cursor: pointer;
    margin-top: 20px;
  }

  .github {
    width: 40px;
    height: 40px;
    padding: 10px;
    transition: 0.8s;
  }
  & .github:hover {
    width: 50px;
    height: 50px;
  }

  .linkedin {
    width: 40px;
    height: 40px;
    padding: 10px;
    transition: 0.8s;
  }
  & .linkedin:hover {
    width: 50px;
    height: 50px;
  }

  .instagram {
    width: 40px;
    height: 40px;
    padding: 10px;
    transition: 0.8s;
  }
  & .instagram:hover {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    h3 {
      padding-left: 28px;
    }

    ul {
      padding-top: 5px;
    }

    li {
      width: 328px;
      height: 430px;
      margin: 28px;
    }

    .icons {
      cursor: pointer;
      margin-top: 7px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: -250px;

    h3 {
      font-size: 2rem;
    }

    ul {
      padding-top: 32px;
    }

    li {
      width: 265px;
      height: 420px;
      padding: 10px;
    }

    p {
      font-weight: 500;
      font-size: 1.18rem;
      line-height: 22px;
      padding: 0 20px 0 20px;
      text-align: center;
    }

    .icons {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 1280px) {
    h3 {
      margin-left: 40px;
    }

    li {
      width: 265px;
      height: 450px;
      margin: 0 80px 70px 60px;
    }

    .icons {
      margin-top: 30px;
    }
  }
`;
