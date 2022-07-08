import { ContainerList } from "./styles";
import { FaClock } from "react-icons/fa";
function ListHourDashDoctor() {
  return (
    <ContainerList className="li-content-hour">
      <div className="avatar">
        <img src="" alt="" />
      </div>
      <div className="list-info">
        <h3>Fulano de tal</h3>
        <span>
          <FaClock /> 14:00
        </span>
      </div>
    </ContainerList>
  );
}

export default ListHourDashDoctor;
