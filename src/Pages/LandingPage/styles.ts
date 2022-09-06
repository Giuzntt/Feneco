import styled from "styled-components";

export const LandingContent = styled.div`
    max-width: 1440px;
    padding: 0 160px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`

export const BannerHeader = styled.div`
    display: flex;
    background-color: black;
    opacity: 0.8;

    div {
        width: 50%;
        flex-direction: column;
    img{
        width: 95%;
        height: 100%;
        overflow: hidden;

    }
    
    }
    .content-banner, h1,h2, p , button{
        margin: 10px 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        
    }
    
    .content-banner{
        flex-direction: column;
        margin: 10px 0;

        h1 {
            font-size: 25px;
            font-weight: 700;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        p {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .subtitle{
            font-size: 16px;
            font-weight: 300;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            .text-link{
                text-decoration:underline white;
                color: #ffffff;
                margin-left: 5px;
            }
        }
        button{
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            padding: 10px 30px;
            border: none;
            background-color: #FDC201;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                filter: brightness(0.8);
            }
        }
        

    }
    
`
export const MainContent = styled.div`
  .title-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    hr {
      border-color: #fdc201;

      width: 30%;
      transform: rotate(180deg);
    }
    h1 {
      font-size: 30px;
      font-weight: 700;
      color: #fdc201;
      text-transform: uppercase;
    }
  }

  .content-main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content-item {
      position: relative;
      width: 30%;
      border-radius: 5px;
      height: 150px;
      border: 1px solid #cccc;
      opacity: 0.8;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;

      align-items: center;
      .content-item-icon {
        margin: 0 20px;
        .icon {
          font-size: 40px;
          color: #fdc201;
        }
      }
      .content-item-text {
        flex-direction: column;
        height: 70%;

        h3 {
          font-size: 14px;
          font-weight: 700;
          color: #fdc201;
        }
        p {
          font-size: 13px;
          font-weight: 400;
          width: 95%;
          /* justify text */
          text-align: justify;
          text-justify: inter-word;
        }
      }

      &::before{
        /* create background; */
        content: '';
        position: absolute;
        width: 20%;
        height: 100%;
        background-color: #fdc201;
        opacity: 0.2;
        border-radius: 5px;
        z-index: -1;

      }
    }
  }
`;

export const ProductContent = styled.div`
  .title-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    hr {
      border-color: #fdc201;
      width: 30%;
      transform: rotate(180deg);
    }
    h1 {
      font-size: 25px;
      font-weight: 700;
      color: #fdc201;
      text-transform: uppercase;
    }
  }
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #cccccc;

    p {
      font-size: 20px;
      font-weight: 700;
      color: #cccccc;
    }
  }

  .content-product {
    width: 100%;
    height: 300px;
    /* background-color: #FDC201; */
    align-items: center;
    display: flex;
    justify-content: space-between;

    .content-product-item {
      width: 30%;
      /* border: 1px solid black; */
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      border-radius: 5px;
      height: 300px;
      background-color: #ffff;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;

      h3 {
        text-align: center;
      }
      p {
        text-align: center;
      }

      button {
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fdc201;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 100;
        font-size: 20px;
        color: #ffff;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

// Language: typescript
