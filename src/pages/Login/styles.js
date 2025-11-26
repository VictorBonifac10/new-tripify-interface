
import { styled } from 'styled-components'

export const ContainerTop = styled.div`
    width: 100%;
    padding: 0px 50px 0px 50px;
    
    img{
      width: 350px;
      position: relative;
      z-index: 2;
      margin-bottom: 30px;

        @media (max-width: 1085px) {
            max-width: 200px;
            margin-bottom: 20px;
        }
    }

    .bannerContainer{

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 90px;
        
        @media (max-width: 1085px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 25px;
        }
    }
`;

export const Banner = styled.div`

    video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: 0;
    }
`;

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    width: 75%;

    @media (max-width: 1085px) {
        width: 100%;
        align-items: center;
    }
`;

export const FirstDescription = styled.p`
    max-width: 85%;

    color: #fff;
    font-size: 50px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;
    line-height: 50px;

    @media (max-width: 1085px) {
        font-size: 24px;
        line-height: 34px;
        max-width: 90%;
        text-align: center;
    }
`;

export const SecondDescription = styled.p`
    max-width: 60%;

    color: #fff;
    font-size: 20px;

    position: relative;
    z-index: 2;

    @media (max-width: 500px) {
        display: none;
    }

`;

export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    .linkContainer{
        display: flex;
        margin-top: 4px;
        gap: 5px;
        p{
            color: #fff;
            margin: 0;
            padding: 0;
        }

        a{
            cursor: pointer;
            color: #ffd500ff;
            text-decoration: none;

            &:hover{
                color: #ffd500ff;
                border-bottom: 2px solid #ffd500ff;
            }
        }
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 25px;

    i{
        color: #fff;
        font-size: 25px;
        transition: 0.5s all;
        cursor: pointer;

    &:hover{
        color: #ffd500ff;
        transform: scale(1.1);
    }
    }
`;

export const ResgisterForm = styled.form`

    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffffeb;
    padding: 20px;
    border-radius: 10px;

    section{
        display: flex;
        gap: 15px;
        
    }

    .inputContainer{
        width: 100%;

        label{
            color: #ffd500ff;
        }

        input{
        width: 100%;
        border: 1px solid #ebebebff;
        border-radius: 5px;
        padding: 8px;
    }
    }
`;

export const Button = styled.button`
    background-color: #ffd500ff;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px;
    transition: 0.5s all;
    
    &:hover{
        background-color: #ffe600ff;
    }
`;



