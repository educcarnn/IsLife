import { ContainerList } from "./styles";

function ListPatientRoutine() {
  return (
    <>
      <ContainerList className="li-content-hour">
        <p className="paragraph">Fulano de tal</p>
        <div className="div-paragraph--check">
          <p className="paragraph">14:30</p>
          <input type="checkbox" />
        </div>
      </ContainerList>
    </>
  );
}

export default ListPatientRoutine;
