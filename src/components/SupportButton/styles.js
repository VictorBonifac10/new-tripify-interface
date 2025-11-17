import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.29);
  border-radius: 8px;
  padding: 12px;
  width: clamp(200px, 80vw, 320px); 
  font-size: 12px;

  position: fixed;
  z-index: 3;
  bottom: 20px;
  right: 20px; 
  
  display: flex;
  align-items: center;
  text-align: start;
  gap: 14px;

  color: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: 1s;
  background: linear-gradient(318deg, #2814da2b, #ffb30053, #ff00d93d, #00aaff34, #0000002b);
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

  h2 {
    font-size: 17px;
    color: #ffd500ff;
    transition: color 0.3s ease;
  }

  i {
    font-size: 30px;
    color: #ffd500ff;
    transition: color 0.3s ease;
  }

  &:hover {
    background-position: left bottom;
    border: 1px solid #ffffffff;
  }

  @media (max-width: 480px) {
    right: 10px;
    bottom: 10px;
    padding: 10px;
    gap: 10px;

    h2 {
      font-size: 15px;
    }

    i {
      font-size: 24px;
    }
  }
`;
