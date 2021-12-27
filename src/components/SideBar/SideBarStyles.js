import styled from "styled-components";

const SideBarStyles = styled.div`
  background-color: var(--light-gray);
  padding: 20px;
  border-radius: 8px;
  height: calc(100vh - 70px);
  .section {
    margin-bottom: 20px;
  }
  h6 {
    color: var(--gray);
    font-weight: bold;
    font-size: 14px;
  }
  ul,
  li {
    list-style: none;
  }
  a {
    display: inline-block;
    width: 100%;
    color: var(--dark-gray);
    text-decoration: none;
    padding: 0;
    padding: 0 10px;
    font-size: 16px;
    transition: all 0.3s;
  }
  a:hover {
    background-color: var(--light-blue);
    border-radius: 3px;
  }
  .nav-link.active {
    color: darkblue;
  }
  span {
    display: inline-block;
    width: 25px;
  }
`;
export default SideBarStyles;
