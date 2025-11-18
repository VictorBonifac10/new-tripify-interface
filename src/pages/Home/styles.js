import { styled } from 'styled-components'

export const ContainerBody = styled.div``;

export const ContainerTop = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px 50px 50px 50px;
    
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
        gap: 90px;
        
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
    margin-top: 90px;

    @media (max-width: 1085px) {
        align-items: center;
    }
`;

export const FirstDescription = styled.p`
    max-width: 65%;

    color: #fff;
    font-size: 50px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;
    line-height: 50px;

    @media (max-width: 1085px) {
        font-size: 28px;
        line-height: 34px;
        max-width: 90%;
        text-align: center;
    }
`;

export const SecondDescription = styled.p`
    max-width: 50%;

    color: #fff;
    font-size: 20px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;

    @media (max-width: 1085px) {
        font-size: 15px;
        max-width: 70%;
    }

`;

export const ContentRight = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 15px;

    i{
        color: #fff;
        font-size: 25px;
        transition: 0.5s;
        cursor: pointer;

        &:hover{
        transform: scale(1.5);
        color: #ffd500ff;
      }
    }

    @media (max-width: 1085px) {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 30px;

    }
`;

export const ContainerMain = styled.main`
`;

export const Text = styled.div`
    max-width: 500px;
`;

export const ContainerServices = styled.div`
  padding: 0px 150px 0px 150px;
  width: 100%;

  @media (max-width: 850px) {
    margin-top: 80px;
    padding: 50px 0px;
    text-align: center;
  }
`;

export const ContainerPortfolio = styled.div`
  position: relative; 
  width: 100%;
  overflow: hidden;
  margin: 100px 0 0 0;
  color: #fff;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 30px;
  }

  .custom-button{
    max-width: 50%;
  }
  
  @media (max-width: 850px) {
      padding: 50px 20px;
      margin-top: 50px;
  }
`;

export const OfferContainer = styled.div`
  margin: 20px;
  padding: 10px;
`;

export const Mask = styled.div`
  background: linear-gradient(109deg, rgba(19, 19, 19, 0.85) 15%, rgba(19,19, 19, 0.27) 50%,rgba(89, 111, 151, 0) 85%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ContainerClients = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0px;
    padding: 0px 80px;
    width: 100%;
    height: 100vh;

  @media (max-width: 850px) {
    padding: 0px;
    text-align: center;
  }
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 200px;

  .contactContent{
    display: flex;
    justify-content: center;
    gap: 100px;
    text-align: start;

    .plane {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;

      img{
        padding: 20px;
        width: 200px;
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% {transform: translateY(20);} 50% {transform: translateY(-30px);}
      }
    }
  }

  .leftContent{
  }

  .rightContent{
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  @media(max-width: 1200px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const ContactCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.29);
  border-radius: 8px;
  width: 100%;
  padding: 10px 150px 10px 10px;
  color: #fff;
  transition: 1s;
  background: linear-gradient(318deg, #2814da2b, #c012a627, #00aaff34, #1b1b1b3e, #0000002b);
  background-size: 1000% 1000%;
  
-webkit-animation: Coolgradient 41s linear infinite;
-moz-animation: Coolgradient 41s linear infinite;
-o-animation: Coolgradient 41s linear infinite;
animation: Coolgradient 41s linear infinite;

@-webkit-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-moz-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-o-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@keyframes Coolgradient { 
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}

&:hover{
    transform: scale(1.05);
    border: 1px solid #fff;
}

div{
  display: flex;
  align-items: center;
  gap: 10px;

  i{
    font-size: 30px;
  }

  h3{
    margin: 0;
    font-size: 20px;
  }

  @media(max-width: 1200px){
    justify-content: center;
    text-align: center;
  }
}

p{
  color: #808080ff;
  margin: 0;
}

  @media(max-width: 1200px){
    padding: 10px 50px 10px 50px;
  }

`;






