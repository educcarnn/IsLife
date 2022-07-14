import styled, {keyframes} from "styled-components";

const animation = keyframes`
from{
 opacity: 0;
  transform: translateX(50px);
}

to{
 opacity: 1;
  transform: translateX(0px);

}
`


export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  margin-top: 1.5rem;

  background: var(--inputBackground);

  animation: ${animation} 1s;
`;
