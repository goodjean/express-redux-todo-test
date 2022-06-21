import moment from "moment";
import styled from "styled-components";

const DateBox = styled.div`
  padding-right: 20px;
  .date {
    margin-top: 8px;
    color: #fff0f0;
    font-size: 13px;
  }
  .dayName {
    margin-top: 6px;
    color: #fff0f0;
    font-weight: bold;
    font-size: 13px;
    font-family: "Indie Flower", cursive;
    font-family: "Poor Story", cursive;
  }
`;

function Date() {
  const nowDateByMoment = moment().format("YYYY-MM-DD");
  const weekIndex = moment().day();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const dayOfWeek = week[weekIndex];
  return (
    <DateBox>
      <div className="date">{nowDateByMoment}</div>
      <div className="dayName">{dayOfWeek}</div>
    </DateBox>
  );
}

export default Date;
