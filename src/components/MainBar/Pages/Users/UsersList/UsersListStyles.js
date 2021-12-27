import styled from "styled-components";
const UsersListStyles = styled.div`
  .cell{
      display: flex;
      align-items: center;
      img{
          width: 37px;
          height:37px;
          border-radius: 50%;
          margin-right: 15px;
          object-fit: cover;
      }
  }
  .edit{
      background-color:#3bb077;
      border: none;
      padding: 0 10px;
      border-radius: 7px;
      cursor: pointer;
      margin-right:25px;
      color: white;
  }
  .delete{
      font-size: 15px;
      color: red;
      cursor: pointer;
  }
`;
export default UsersListStyles;
