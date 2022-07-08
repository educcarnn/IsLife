import styled from "styled-components";

export const ContainerListSchedule = styled.li`
  width: 100%;
  border-left: 5px solid green;
  border-radius: 10px;
  height: 89px;
  background-color: #f8f9fa;
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
