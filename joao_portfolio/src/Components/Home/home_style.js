import styled from "styled-components";

export const HomeSection = styled.section`
  display: flex;
  align-items: flex-start;
  padding-left: 15px;
  width: 100%;
  height: 75vh;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  h1,
  h2 {
    font-size: 3vw;
    font-family: "PressStart", sans-serif;
    color: #00b100;
    word-spacing: -22px;
  }
  h2 {
    font-size: 2vw;
    word-spacing: -10px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
    h1,
    h2 {
      word-spacing: -5px;
      font-size: 4.9vw;
    }
    h2 {
      font-size: 3vw;
    }
  }
`;
export const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  width: 57.5vw;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const NameBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 30vh;
  width: 57vw;
  img {
    position: relative;
    top: 6vh;
    height: 20vh;
    animation: shake 2s infinite ease-in-out alternate-reverse both;
    @keyframes shake {
      25% {
        transform: rotate(-15deg);
      }
      50% {
        transform: rotate(14deg);
      }
      75% {
        transform: rotate(-13deg);
      }
    }
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
  }
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
    padding-left: 6px;
    img {
      display: none;
    }
  }
`;
export const DevelopBox = styled.div`
  padding-top: 20px;
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    padding-left: 3px;
  }
`;
export const ResponsiveHand = styled.img`
  display: none;
  @media (max-width: 800px) {
    position: relative;
    top: -3vh;
    display: initial;
    width: 15vw;
    animation: shake 2s infinite ease-in-out alternate-reverse both;
    @keyframes shake {
      25% {
        transform: rotate(-15deg);
      }
      50% {
        transform: rotate(14deg);
      }
      75% {
        transform: rotate(-13deg);
      }
    }
  }
`;
export const LaptopBox = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 30vw;
  height: 64vh;
  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 240px;
  }
`;
export const LaptopImage = styled.img`
  width: 28vw;
  height: 59vh;
  opacity: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  animation: other 3.5s infinite ease-in normal forwards;
  transition: ease-in-out 0.8s;
  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 240px;
  }
  @keyframes other {
    0% {
      transform: translate(-1px, -1px);
    }
    25% {
      transform: translate(3.5px, 6.5px);
    }
  }
  @media (max-width: 800px) {
    width: 230px;
    object-fit: scale-down;
  }
`;
