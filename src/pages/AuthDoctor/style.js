import styled from "styled-components";

export const DivGlobalLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLoginDoctor = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  /* column-count: 2; */
  align-items: center;
  /* justify-content: center;  */

  gap: 18px;
  background-color: var(--cinza);
  width: 700px;
  height: 550px;
  padding: 2rem 0 2rem 1rem;

  font-family: "Inter", serif;

  div {
    width: 20rem;

    div + div {
      margin-top: 1.5rem;
    }

    div {
      width: 20rem;
    }
  }

  button {
    height: 3rem;
    width: 20rem;
    margin-top: 2.7rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100vw;
  height: 10rem;

  align-items: center;

  justify-content: center;
  margin: 2rem;
`;
