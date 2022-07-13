import styled from "styled-components";

export const ContainerReceitas = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ContentReceitas = styled.div`
  width: 600px;
  height: 700px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .info-receitas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ce2d5d;
    gap: 16px;
    width: 583px;
    height: 73px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 16px;
    .h2-info-remedio {
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
    .vencimento {
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
  }
  .img-no--card--receitas {
    width: 616px;
  }
`;
