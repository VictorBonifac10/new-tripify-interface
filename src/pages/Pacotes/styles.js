import styled from "styled-components";

export const PackagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;

  section{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 5px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
  }
`;

export const GridCard = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;

  @media (max-width: 850px) {
    width: 100%;
  }

  button{
    border: 0;
    border-bottom: 1px solid #e3e3e3ff;
    width: 100%;
    height: 40px;
    background-color: transparent;
    transition: 0.5s all;
    font-size: 14px;
  
  &:hover{
    background-color: #ffd500ff;
    color: #fff;
  }
  }

`;