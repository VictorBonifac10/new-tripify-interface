import styled from "styled-components";

export const CardGrid = styled.div`
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

export const Card = styled.div`
  border-radius: 1rem;
  color: #ffffffff;
  border: 1px solid rgba(255, 255, 255, 0.29);
  position: relative;
  overflow: hidden;
  transition: 1s;
  width: 100%;
  height: 100%;

&:hover{
    transform: scale(1.05);
    border: 1px solid #fff;
}

  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const CardBanner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  };
`;

export const Mask = styled.div`
  background: linear-gradient(200deg, rgba(255, 255, 255, 0) 15%, rgba(21, 98, 160, 0.21) 50%,rgba(255, 191, 0, 0.91) 85%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 80px 10px 10px 10px;
  margin: 70px 0px 10px 0px;
  position: relative;
  z-index: 3;

  i {
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 5px 9px;
    font-size: 17px;
  }

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media (max-width: 850px) {
    justify-content: center;
  }
`;
