import styled from "styled-components";

export const PackagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 90px;
`;

export const ProfileContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  };
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;
  height: 100%;
  padding: 30px;

  img{
    width: 280px;
    height: 280px;
    border-radius: 50%;

  @media(max-width: 950px){
    width: 200px;
    height: 200px;
  }
  }

  @media(max-width: 950px){
    flex-direction: column;
    gap: 30px;
  }

`;

export const Form = styled.form`
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: end;

  .inputContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  label{
    color: #ffd500ff;
  }

  input{
    border: 1px solid #f0f0f0ff;
    padding: 7px;
    border-radius: 6px;
    width: 80%;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #ffd500ff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 80%;
  transition: 0.5s all;

  &:hover{
    background-color: #fff700ff;
  }
`;

export const FavoriteList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  border-bottom-left-radius: 20px;

  @media(max-width: 1200px){
    grid-template-columns: 1fr;
  }
`;

export const ItemCart = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 6px #7f7f7fa4;
  border-radius: 5px;

  padding: 10px;
  margin: 5px;
  width: auto;

  img{
    border-radius: 5px;
    width: 200px;
    height: 100px;
  }

  @media(max-width: 950px){
    flex-direction: column;
    gap: 8px;

  .customCartButton{
    width: 100%;
  }
  }
`;



