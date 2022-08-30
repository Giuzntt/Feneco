import styled from "styled-components";


export const ContainerHeader = styled.header`
  div {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  background: #fdc201;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

 
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  

  ul li {
    display: inline-block;
    list-style: none;
    margin: 0 20px;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.2);
    }
  }
`;
