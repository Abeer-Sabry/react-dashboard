import styled from "styled-components";

const ProductDetailsStyles = styled.div`
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
      background-color: darkblue;
      color: white;
    }
  }
  .productInfo {
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 40px;
  }
  .productImg {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 7px;
      margin-right: 15px;
    }
    p {
      font-weight: 600;
    }
  }
  .listTile {
    display: inline-block;
    width: 100px;
    font-weight: 600;
  }
  .userUpdate {
    display: grid;
    grid-template-columns: 7fr 5fr;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 25px;
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
export default ProductDetailsStyles;
