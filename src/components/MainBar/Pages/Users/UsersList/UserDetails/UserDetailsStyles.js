import styled from "styled-components";

const UserDetailsStyles = styled.div`
  .titleInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    h4 {
      font-weight: 600;
    }
    .create {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .userContainer {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-column-gap: 30px;
    .userShow,
    .userUpdate {
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 25px;
    }
    .userContent {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
        object-fit: cover;
      }
      span {
        display: block;
      }
      .name {
        font-weight: 600;
      }
      .title {
        color: var(--dark-gray);
      }
    }
  }
  .userDetails {
    h6 {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 11px;
      color: var(--dark-gray);
    }
    ul {
      .contact {
        margin: 15px 0;
      }
      li {
        display: flex;
        font-size: 15px;
        margin-bottom: 5px;
        span {
          width: 25px;
          font-weight: bolder;
        }
        p {
          font-size: 14px;
          margin-bottom: 0;
        }
      }
    }
  }
  .userUpdate {
    display: grid;
    grid-template-columns: 7fr 5fr;
    .userForm {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      label {
        margin: 0;
      }
      input {
        width: 70%;
        border-radius: 7px;
        border: none;
        border-bottom: 1px solid lightgray;
        height: 40px;
      }
    }
    .upinfo {
      display: flex;
      flex-direction: column;
      text-align: right;
      justify-content: space-between;
      .content {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: right;
        img {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          object-fit: cover;
          margin-right: 30px;
        }
      }
      button {
        font-size: 17px;
        padding: 3px 35px;
        background-color:lightblue;
        color: black;
      }
    }
  }
`;
export default UserDetailsStyles;
