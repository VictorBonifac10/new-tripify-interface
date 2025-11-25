import styled from "styled-components";

export const ContainerTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1px;
    margin: 20px;

    h2{
        color: #ffd500ff;
        font-weight: 600;

    hr{
        width: 150px;
        border: 2px solid #ffd500ff;
        border-radius: 50px;
        margin: 0px 0px 2px 0px;
        padding: 0;
    }
    }

    p{
        color: ${({ theme }) => theme.text};
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 20px;
        padding: 0;
    }
`