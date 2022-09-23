import styled from "styled-components";

export const FooterContainer = styled.footer`
  overflow: hidden;
  width: 100%;
  height: 20vh;
  position: relative;
  background-color: #fdc201;
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: -1px;
    right: -1px;
    top: -1px;
    z-index: 3;
    pointer-events: none;
  }

  @media screen  and (max-width: 768px) {
    height: 30vh;
    max-width: 100%;

  }

  
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #fff;
    font-family: "Open Sans", sans-serif;
  }

  ul li {
    display: inline-block;
    margin: 0 20px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 30px;

    cursor: pointer;

    text-decoration: none;

  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 1rem;

    p {
      margin-bottom: 1rem;
    }

    ul li {
      margin: 0 10px;
    }
  }
`;
