import styled from "styled-components";

const EnrollmentContainer = styled.div`
  width: 390px;
  height: 471px;

  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-top: 67px;
`;

const Category1 = styled.div`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  margin-left: 27px;
  margin-top: 33px;
  display: inline-block;
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 18px;
  background: #838383;
  margin: 35px 7px 0 7px;
  display: inline-block;
`;

const Category2 = styled.div`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  margin-top: 33px;
  display: inline-block;
`;

const EventTitle = styled.div`
  width: 324px;
  height: 72px;
  margin: 20px 39px 0 27px;

  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const EventTag = styled.div`
  color: #582fff;
  font-size: 15px;
  font-family: "Rubik";
  font-weight: 400;
  word-wrap: break-word;

  display: block;
  margin: 4px 19px 0 27px;
`;

const HorizontalDivider = styled.div`
  width: 338px;
  height: 1px;
  background: #d9d9d9;
  margin: 16px 35px 0 27px;
`;

const Profile = styled.div`
  width: 29px;
  height: 29px;
  backgroud: #d9d9d9; //임시
  border-radius: 70%;
  //overflow: hidden;
  //object-fit: cover;
  margin: 19px 0 0 27px;
`;

const Sponsor = styled.div`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: block;
  margin: 22px 8px 0 8px;
`;

const Date = styled.div`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  margin: 41px 0 31px 29px;
  display: inline-block;
`;

const Price = styled.div`
  color: #582fff;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  margin: 44px 39px 31px 0;
  display: inline-block;
  float: right;
`;

export {
  EnrollmentContainer,
  Category1,
  VerticalDivider,
  Category2,
  EventTitle,
  EventTag,
  HorizontalDivider,
  Profile,
  Sponsor,
  Date,
  Price,
};
