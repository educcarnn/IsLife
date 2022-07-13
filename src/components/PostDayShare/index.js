import { ContainerColumn, PostContainer } from "./style";

function PostDayShare() {
  return (
    <PostContainer>
      <div>
        {/* imagem aqui */}

        <section>Avatar</section>


      </div>

      <ContainerColumn>
        <div>
          <h3>Fernando Lacerda&#160;  - <span>está se sentindo feliz </span> </h3>
          <p>2 Jul 2022</p>
        </div>
        <div>
          <p className="Text__Post">
            Escolhi uma rota diferente para caminhar hoje e acabei descobrindo
            uma cafeteria que nunca javia visto antes no meu bairro e comi o
            melhor prailine da minha vida!
          </p>
        </div>

      </ContainerColumn>
    </PostContainer>
  );
}

export default PostDayShare;
