import styled from "styled-components";

export const PackagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 90px;
`;

export const CartGroup = styled.section`
  width: 100%;
  height: 100vh;
  margin-bottom: 30px;
  padding: 10px;
  overflow: auto;

  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  };

  .listCartContainer{
    display: flex;
    justify-content: center;
    background-color: #fff;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    @media(max-width: 1200px){
      flex-direction: column;
      align-items: center;
  }
}
`;

export const ListCart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 50%;
  height: 100%;
  padding: 10px;

  border-bottom-left-radius: 20px;

  @media(max-width: 1200px){
    width:100%;
  }
`;

export const ItemCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 6px #7f7f7fa4;
  border-radius: 5px;

  padding: 10px;
  margin: 5px;

  img{
    border-radius: 5px;
    width: 200px;
    height: 100px;

  @media(max-width: 800px){
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  }

  p{
    margin: 0;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media(max-width: 800px){
      margin: 10px;
    }

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 2px 7px;
      border-radius: 50px;
      background-color: #ffd500ff;
      color: #fff;
      font-size: 10px;
      transition: 0.5s, all;

      &:hover{
        background-color: #fff700ff;
      }
    }

    p{
      margin: 0;
    }
  }

  @media(max-width: 800px){
    flex-direction: column;
    padding: 0;
    gap: 13px;
  }
`;

export const ResumeCart = styled.section`
  padding: 10px;
  width: 50%;
  border-bottom-right-radius: 20px;

  section{
    display: flex;
    flex-direction: column;
    gap: 100px;
    justify-content: space-between;
    border-radius: 5px;
    margin: 15px;
    padding: 20px;
  }

  h4{
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #ffd500ff;
    font-size: 18px;

    span{
      color: gray;
    }

  @media(max-width: 450px){
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }
  }

  @media(max-width: 600px){
    width: 100%;
  }
`;



