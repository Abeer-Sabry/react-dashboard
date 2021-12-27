import styled from "styled-components";

const LgWidgetStyles = styled.div`
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  h5 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  table {
    width: 100%;
    border-spacing: 20px;
    thead th{
      padding:5px 15px;
    }
     td {
        padding: 10px;
    }
  }
  .user {
    font-weight: 600; 
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }
  }
  .Date,
  .Amount {
    font-weight: 400;
  }
  .approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  .declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  .pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;
export default LgWidgetStyles;
