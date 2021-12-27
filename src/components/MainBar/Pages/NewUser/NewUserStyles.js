import styled from "styled-components";

const NewUserStyles = styled.div`
  h5 {
    font-weight: 600;
    margin-bottom: 30px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .forminfo {
    display: flex;
    flex-wrap: wrap;
  }
  .userForm {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-right: 70px;
    label {
      margin: 0;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      border-radius: 7px;
      border: none;
      border-bottom: 1px solid lightgray;
      height: 30px;
      margin-bottom: 40px;
    }
  }
  .gendertitle {
    label {
      font-weight: 600;
    }
  }
  .genderInputs {
    display: flex;
    .radios {
      display: flex;
      align-items: center;
      label {
        margin-right: 30px;
        margin-bottom: 0;
      }
      input {
        margin-right: 3px;
        margin-bottom: 0;
      }
    }
    input {
      height: 15px;
    }
  }
  .userSelect{
      background-color:white;
      border: 1px solid var(--gray);
      border-radius: 7px;
      padding: 7px;
  }
  .CreateButton{
      button{
          background-color: darkblue;
          color: white;
          padding:3px 100px;
          font-size:17px;
          margin-top: 50px;
          
      }
  }
`;
export default NewUserStyles;
