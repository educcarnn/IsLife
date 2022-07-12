import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  height: 620px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
  background: #f8f9fa;

  .div-input {
    margin-top: 32px;
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
  
  .input-new-patient {
    width: 90%;
    background: #e9ecef;
    height: 50px;
    border-radius: 5px;
    outline: 0;
    border: none;
    margin-top: 25px;
    padding-left: 16px;
  }
  .btn-register-patient {
    margin-top: -4rem;
    width: 95%;
    height: 50px;
    background-color: #ce2d5d;
    color: white;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;
    border: none;
    margin-left: 12px;
  }
`;
