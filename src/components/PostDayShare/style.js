import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  gap: .6rem;

  width: 100%;


  padding: 1rem;
  color: #222;
  background-color: #F8F9FA;


  section{
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: .3rem;
    border-radius: 50px;
    
    background-color: #707070;

  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .5rem 1rem;


  h3{
    font-size: .8rem;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    span{
      font-size: .7rem;
      font-weight: 600;
    }
  }

  p{
    font-size: .65rem;
    font-weight: 500;
    
    color: 	#707070;

    padding-top: .6rem;

  }

  .Text__Post{
    font-size: small;
    font-weight: 500;

    color: 	#404040;

    text-align: justify;
    padding-right: .75rem;
  }
`;
