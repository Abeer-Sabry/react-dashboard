import styled from "styled-components";

const SmWidgetStyles = styled.div`
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  h5 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    align-items: center;
    p {
      margin-bottom: 0;
    }
    .userJob{
        color: var(--gray);
    }
   button{
       padding: 5px 10px;
       border-radius: 7px;
       border: none;
       color: var(--dark-gray);
   }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  
`;
export default SmWidgetStyles;
