import styled from "styled-components";

export const ContainerConsult = styled.main`
  width: 100%;
  margin-top: 25px;
  padding: 16px;
  display: flex;
  gap: 25px;
  justify-content: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContentConsultHour = styled.div`
  width: 25%;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    display: flex;
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
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContentConsultList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  background-color: #f9f1f1;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ListContentConsult = styled.ul`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
