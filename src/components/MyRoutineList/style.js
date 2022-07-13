import styled from "styled-components";

export const ContentPatient = styled.div`
  display: flex;
  justify-content: flex-start;

  align-items: center;
  flex-direction: column;
  width: 50%;
  /* height: 100vh; */

  padding: 17px;
  margin-left: 1.9rem;

  /* background-color: #f9f1f1; */

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ListaTarefas = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* max-height: 600px; */
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
