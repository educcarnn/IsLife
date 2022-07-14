import { ContainerColumn, PostContainer,PostImg } from "./style";

function PostDayShare({element}) {
  
  return (
    <PostContainer>

      <img src="https://www.seekpng.com/png/full/984-9840427_user-profile-computer-icons-facebook-avatar.png" alt="" className="testeImg"/>

      <ContainerColumn>
        <div>
          <h3>{element.status} </h3>
          <p>2 Jul 2022</p>
        </div>
        <div>
          <p>{element.msgPatient}</p>
        </div>

      </ContainerColumn>
    </PostContainer>
  );
}

export default PostDayShare;
