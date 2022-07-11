import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: relative;
  width: 100%;
  min-height: 60px;
  max-height: 63px;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid grey;
  object-fit: cover;



  img {
    height: 60px;
    background-color: #ffffff;
    padding:  0 1rem;
    border-radius: 55%;
  }

  .div-buttons {
    width: 15%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 300px;

    .Menu__Desktop {
      display: none;
    }

    .btn-header{
      display: none;
    }
  }

  .div-buttons {
    width: 200px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;

    .btn-header {
      width: 175px;
      height: 40px;
      color: white;
      background-color: #ce2d5d;
      border: 1px solid black;
      border-radius: 10px;
    }
  }

  
  @media only screen and (min-width: 801px) {
    .Menu__Mobile {
        display: none;
    }
    .Menu__Mobile--icon{
        display: none;
    }
  }
`;



export const StyledMenuMobileDoctor = styled.div`
  display: ${(props) => props.Display || "none"};
  width: 0;
  height: 0;
  top: 66px;
  right: 0;
  border-bottom-right-radius: 170%;
  transition: 0.6s ease-in;
  z-index: 9999;
  visibility: hidden;

  .UserInformation {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 3%;

    background-color: rgba(0, 0, 0, 0.1);

    box-shadow: 1px -2px 5px #3333 inset;

    section {
      display: flex;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: #f1f1ff;
    }

    .User__Info {
      display: flex;
      align-items: center;
      gap: 1rem;

      h3 {
        color: #f1f1ff;
      }
    }

    .Menu__Mobile--Btn {
      margin-right: 1.8rem;

      font-weight: 600;
      color: #ce2d5d;

      border: none;
      background-color: #f1f1ff;
    }
  }

  .Menu {
    display: block;
    position: fixed;
    width: 0;
    height: 0;
    top: 64px;
    right: 0;
    border-bottom-right-radius: 170%;
    transition: 0.6s ease-in;
    z-index: 9999;
    overflow-y: auto;
    visibility: hidden;
    background-color: #ce2d5d;
  }

  .Menu {
    visibility: visible;
    width: 70%;
    min-width: 280px;
    height: calc(100vh - 60px);
  } 

  .Menu li {
    margin-top: 45px;
    margin-left: 1em;
    padding: 0.6em 0;
    text-align: center;
  }

  .Menu li a {
    font-size: 1.3em;
    padding-bottom: 0.6em;
    border-bottom: #e4e1e1 solid;
  }

  @media screen and (max-width:800px) {
    
  }

`;

