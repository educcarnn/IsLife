import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  background: var(--cinza);

  font-family: "Inter", serif;

  border: 1px solid transparent;

  width: 400px;
  height: 280px;

  padding: 17px;

  align-items: center;
  justify-content: space-between;

  input {
    background: var(--brancoBackground);
    border-radius: 5px;
    border: 1px solid transparent;
    color: var(--pretoFont);
    display: flex;
    height: 3rem;

    width: 100%;
  }

  div {
    div {
      margin-bottom: 1rem;
      color: var(--rosa);
      font-family: "Roboto", "inter", serif;
    }
  }

  select {
    background: var(--brancoBackground);
    border-radius: 10px;
    border: 1px solid transparent;
    /* color: var(--pretoFont); */
    display: flex;
    height: 3rem;
    width: 100%;

    option {
      background: transparent;
      border: 1px solid transparent;
    }
  }
`;

export const DivExtra = styled.div`
  width: 100%;
`;
