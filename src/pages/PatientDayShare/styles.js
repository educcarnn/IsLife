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
  max-width: 450px;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;


 

  .title-consults {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 99%;
    max-width: 800px;

    padding: 1rem 0;
  }
`;

export const ContentDayShare = styled.div`
  list-style: none;
  margin-top: 16px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const InputStatus = styled.input`
 width: 94%;
 height: 35px;
 background-color: white;
 color:#CE2D5D;
 border-radius: 8px;
 border: 1px solid #CE2D5D;
 outline: 0px;
 padding-left: 5px;

`

export const TextDayShare = styled.textarea`
  width: 98%;
  min-width: 220px;
  
  resize: none;
  padding: 1rem;
  
  border-radius: 8px;
  box-sizing: border-box;

color:#CE2D5D;
 border-radius: 8px;
 border: 1px solid #CE2D5D;
 outline: 0px;
 padding-left: 5px;


  @media (min-width: 800px) {
    width: 96%;
    min-width: 320px;
  }

`




export const ContentConsultList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  max-height: 650px;
  max-width: 800px;

  padding: 1rem;

  box-sizing: border-box;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 1rem 0;

    height: auto;
  }
`;

export const ListContentDayshare = styled.ul`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  box-shadow: 1px 2px 8px #777;

  background-color: #B32751;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  
  button{
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border:1px solid #CE2D5D;

    :hover{
      background-color: white;
      color: #CE2D5D;
      border: 1px solid #CE2D5D;
    }

  }

  @media screen and (min-width: 800px){
   
    justify-content: space-between;

  };

`