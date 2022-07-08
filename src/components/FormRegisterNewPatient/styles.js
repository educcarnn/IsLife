import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  height: 620px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;

  .div-input {
    margin-top: 32px;
    width: 100%;
    height: 75%;
  }
  .input-new-patient {
    width: 98%;
    background: #e9ecef;
    height: 50px;
    border-radius: 5px;
    outline: 0;
    border: none;
    margin-top: 25px;
  }
  .btn-register-patient {
    width: 100%;
    height: 50px;
    background-color: #ce2d5d;
    color: white;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;
    border: none;
  }
`;
