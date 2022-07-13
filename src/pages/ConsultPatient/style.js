import styled from "styled-components";

export const ContainerConsult = styled.main`
  width: 100%;
  margin-top: 25px;
  padding: 16px;
  display: flex;
  gap: 25px;
  justify-content: center;
  .div-textarea {
    padding: 16px;
    line-height: 20px;
    margin-bottom: 16px;
  }
  .div-select {
    display: flex;
    flex-direction: column;
    height: 100px;
    gap: 10px;
    .tag-select-routine {
      height: 30px;
      overflow-y: scroll;
    }
  }
  .btn-rotina {
    height: 40px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 16px;
  }
`;
export const ContentConsult = styled.div`
  width: 310px;

  height: 450px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #f9f1f1;
  padding-top: 60px;

  .title-consults {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 310px;
  }
`;

/* export const ListContentHour = styled.ul`
  list-style: none;
  margin-top: 16px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`; */

export const ContentListConsult = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f9f1f1;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const UlListConsult = styled.ul`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 45px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
