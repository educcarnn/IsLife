import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 0.5px solid grey;
  object-fit: cover;
  img {
    width: 250px;
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
`;
