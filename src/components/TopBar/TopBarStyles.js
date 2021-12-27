import styled from "styled-components";

const TopBarStyles = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  position:sticky;
  top:0;
  background-color: white;
  .logo {
    color: darkblue;
    font-weight: bold;
    font-size: 22px;
  }
  .socialIcons {
    display: flex;
    align-items: center;

    .icon1,
    .icon2,
    .icon3 {
      position: relative;
    }
    span {
      font-size: 25px;
      display: inline-block;
      margin-right: 20px;
    }
    .Badge {
      border-radius: 50%;
      width: 18px;
      height: 18px;
      line-height: 9px;
      display: flex;
      justify-content: center;
      font-size: 13px;
      position: absolute;
      top: 0;
      left: 10px;
      color: white;
      background-color:blue !important;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
export default TopBarStyles