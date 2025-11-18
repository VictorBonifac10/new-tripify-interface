import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 40px;

  img{
    width: 250px;
  }

  ul{
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;

  li{
      a{
        color: #ffd500ff;
        text-decoration: none;
        padding: 3px;

      &:hover{
        color: #fff700ff;
        border-bottom: 2px solid #fff700ff;
      }

      }  
    }
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    i{
      font-size: 20px;
      transition: 0.5s;
      cursor: pointer;

      &:hover{
        transform: scale(1.5);
        color: #ffd500ff;
      }
    }
  }
`;

export const Text = styled.div`
    max-width: 500px;
`;
