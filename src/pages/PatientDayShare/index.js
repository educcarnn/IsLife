import PostDayShare from "../../components/PostDayShare";
import {
  ContainerDayShare,
  ContentShare,
  ContentConsultList,
  ContentDayShare,
  ListContentDayshare,
  TextDayShare,
  ContainerBtn,
} from "./styles";

function DayShare() {
  return (
    <div>
      <ContainerDayShare>
        <ContentShare>
          <h2 className="title-consults">Compartilhe</h2>
          <p>com o seu médico como foi o seu dia</p>
          <ContentDayShare>
            <TextDayShare
              rows="12"
              placeholder="Como você está se sentindo hoje?"
            />
          </ContentDayShare>

          <ContainerBtn>
            <button>Enviar</button>
            <button>Limpar</button>
          </ContainerBtn>
        </ContentShare>

        <ContentConsultList>
          <ListContentDayshare>
            <PostDayShare/>
          </ListContentDayshare>
        </ContentConsultList>
      </ContainerDayShare>
    </div>
  );
}

export default DayShare;
