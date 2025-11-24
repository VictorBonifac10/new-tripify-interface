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

  div{
    display: flex;
    justify-content: center;
    background-color: #ffffffff;
  }
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 50%;
  height: 100%;
  padding: 10px;

  .formContainer{
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 50px;
  }

  i{
    color: #ffd500ff;
    font-size: 95px;
  }
`;

export const Form = styled.form`

  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;

  section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .inputContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  label{
    color: #ffd500ff;
  }

  input{
    border: none;
    padding: 7px;
    border-radius: 6px;
    width: 80%;
  }

  .photo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }

  .infos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #ffd500ff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 50%;
  transition: 0.5s all;

  &:hover{
  background-color: #fff700ff;
  }
`;

export const ListCart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-bottom-left-radius: 20px;
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

  p{
    margin: 0;
  }

  .customCartButton{
    width: 8%;
  }
`;



