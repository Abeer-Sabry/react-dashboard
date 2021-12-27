import styled from "styled-components";

const FeaturedStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  margin-bottom: 30px;
  .featuredItem {
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 20px;
    border-radius:8px;
    p.title {
      margin-bottom:10px;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .moneyContainer {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
      margin-bottom: 0;
    }
    .money {
      font-size: 30px;
      font-weight: 600;
      margin-right: 35px;
    }
    .moneyRate {
      i {
        margin-left: 2px;
        font-size: 13px;
      }
      .positive i {
        color: green;
      }
      .negative i {
        color: red;
      }
    }
  }
  .sub{
      font-size: 14.5px;
      color: var(--gray);
  }
`;
export default FeaturedStyles;
