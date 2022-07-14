import styled from "styled-components";

export const ContainerListSchedule = styled.li`
  width: 100%;
  border-left: 5px solid green;
  border-radius: 5px;
  height: 89px;
  background-color: #f8f9fa;
  box-shadow: 0px 0px 4px grey;
`;

export const ContentListSchedule = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .pacient-name {
    font-size: 20px;
    font-weight: 500;
    margin: 16px;
  }
  .date-and-hour {
    font-size: 20px;
    font-weight: 500;
    margin-left: 16px;
  }
`;
