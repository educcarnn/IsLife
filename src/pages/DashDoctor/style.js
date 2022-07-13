import styled from "styled-components";

export const ContainerConsult = styled.main`
  margin-top: 25px;
  height: 100vh;
  padding: 16px;
  display: flex;
  gap: 25px;
  justify-content: center;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    align-items: center;
    padding: 16px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const ContentConsultHour = styled.div`
  width: 25%;
  height: 700px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  .title-consults {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  @media (max-width: 800px) {
    display: flex;
    height: 300px;

    flex-direction: column;
    width: 90%;
  }
`;

export const ListContentHour = styled.ul`
  list-style: none;
  margin-top: 16px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 16px;

  /*  max-height: 585px; */
  overflow-x: scroll;
  /* overflow-y: auto;
  overflow-x: hidden; */

  @media (max-width: 800px) {
    display: flex;
    height: 400px;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContentConsultList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  max-height: 700px;
  background-color: #f9f1f1;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ListContentConsult = styled.ul`
  margin-top: 20px;
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 45px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: scroll;

  @media (max-width: 800px) {
    display: flex;
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;
