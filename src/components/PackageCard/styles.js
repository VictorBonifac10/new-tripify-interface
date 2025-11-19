import styled from "styled-components";

export const Card = styled.div`

    background: #fff;
    border-radius: 12px;
    border-bottom-left-radius: 0;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    height: auto !important;
    display: flex;
    flex-direction: column;
    transition: 0.5s all;

    &:hover{
      transform: scale(1.03);
      border-radius: 0;
    }

 img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

 article {
    padding: 12px;
    flex: 1 0 auto;

    .titleCard{
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2{
        font-size: 20px;
        color: #ffd500ff;
      }
    }

    .detailsCard{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      p{
        margin: 0;
        background-color: #ffd500ff;
        color: #fff;
        font-size: 14px;
        border-radius: 50px;
        padding: 7px;
      }
    }
  }

`;
