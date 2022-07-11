import styled from "styled-components";

export const ContainerDayShare = styled.main`  
  margin-top: 25px;
  padding: 16px;
  display: flex;
  gap: 25px;
  justify-content: center;



  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 16px;
  }
`;
export const ContentShare = styled.div`
  width: 25%;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;

 

  .title-consults {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const ContentDayShare = styled.div`
  list-style: none;
  margin-top: 16px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

 
  max-height: 585px;
 
  overflow-y: auto;
  overflow-x: hidden;


  @media (max-width: 800px) {
    display: flex;
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
  max-height: 650px;
  background-color: #f9f1f1;


  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ListContentDayshare = styled.ul`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 45px;

  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;




export const TextDayShare = styled.textarea`
  width: 98%;
  min-width: 180px;
  
  resize: none;
  padding: 1rem;
  
  border-radius: 8px;
  box-sizing: border-box;


`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  justify-content: flex-start;
  gap: 10px;
  padding: 1rem;

  box-sizing: border-box;

  
  button{
    font-weight: 500;
    width: 10vw;
    max-width: 150px;
    min-width:  100px;
    padding: .6rem 1rem;
  }

  @media screen and (min-width: 800px){
   
    justify-content: space-between;

  };

`