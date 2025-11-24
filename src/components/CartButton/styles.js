import styled from "styled-components";

export const CartButtonContainer = styled.button`
    background-color: #ffd500ff;
    border: 1px solid #ffd500ff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    padding: 14px;
    width: 100%;
    font-size: 16px;

    position: relative;
    z-index: 2;

    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p{
      margin: 0;
    }

    &:hover{
        background-color: #fff700ff;
    }
`;