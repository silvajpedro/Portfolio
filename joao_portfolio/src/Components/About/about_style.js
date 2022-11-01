import styled from "styled-components";
import codingbackground from "../Style/Assets/teste.jpg";
import PressStart from "../Style/Assets/PressStart2P-vaV7.ttf";

export const Fundo = styled.div`
  cursor: url({testeCursor}), auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 218vh;
  cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAEAAQCoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAFAAAABgAAAAUAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAADAAAAGkAAABpAAAAaQAAAAoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAABAAAAAwAAAAwAAABp/////////////////////wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAGkAAABpAAAACQAAAAYAAAAIAAAAFf////8PDw//KSkp/ykpKf//////AAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG//////////8AAABpAAAAEQAAABMAAABpDw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn/////Dw8P//////8AAABpAAAAIv////8PDw//KSkp/ykpKf8pKSn//////wAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P//////8AAABpDw8P/xcXF/8pKSn/KSkp//////8AAAAOAAAABgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8PDw//Dw8P//////8PDw//KSkp/ykpKf8pKSn//////wAAAGkAAABpAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/w8PD/8PDw//Dw8P/xcXF/8pKSn/KSkp//////////////////////8AAABpAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P/w8PD/8ICAj/KSkp/ykpKf8pKSn/KSkp/ykpKf8pKSn/KSkp//////8AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8ICAj/Dw8P/w8PD/8XFxf/FxcX/ykpKf8pKSn/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/wAAAP8ICAj/CAgI/w8PD/8XFxf/FxcX/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//AAAA/wAAAP8AAAD/Dw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8AAAD/CAgI/w8PD/8XFxf/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/wgICP8PDw//FxcX/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/////w8PD/8XFxf/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb/////Dw8P/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP////8PDw//Dw8P//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////AAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////8P///+D///ng///4wP//+EH///gB///4AH//+AA///gAf//4AP//+AH///gD///4B///+A////gf///4P///+H////j/////////8="),
    auto;
  overflow: hidden;
  background-image: url(${codingbackground});
  background-size: 100%;
  background-position: 0 10vh;
  background-repeat: repeat-y;
  @media (max-width: 800px) {
    height: 201vh;
  }
`;
export const Home = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  top: 14vh;
  width: 90%;
  height: 195vh;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0px 0px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @font-face {
    font-family: "PressStart";
    src: url(${PressStart}) format("truetype");
  }
  @media (max-width: 800px) {
    height: 184vh;
    /* border: solid yellow; */
  }
`;
export const FirstSection = styled.section`
  position: relative;
  top: 2vh;
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 800px) {
    top: 0vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: solid red; */
    height: 110vh;
  }
`;
export const CodingBox = styled.figure`
  display: flex;
  justify-content: center;
  width: 41vw;
  @media (max-width: 800px) {
    width: 100%;
    height: 79vh;
  }
`;
export const CodingImage = styled.img`
  height: 78vh;
  width: 39vw;
  border-radius: 10px;
  padding-left: 2vw;
  @media (max-width: 800px) {
    width: 70vw;
    height: 30vh;
    object-fit: scale-down;
  }
`;
export const AboutMeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #00b100;
  width: 50vw;
  height: 77vh;
  text-align: center;
  h2 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 3vw;
    height: 21vh;
    font-family: "PressStart", sans-serif;
  }
  @media (max-width: 800px) {
    /* border: solid yellowgreen; */
    height: 75vh;
    width: 100%;

    h2 {
      align-items: flex-end;
      /* border: solid purple; */
      height: 6vh;
      font-size: 5vw;
    }
  }
`;
export const AboutMeText = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: justify;
  height: 53vh;
  width: 95%;
  font-size: 1.95vw;
  line-height: 2.2vw;
  word-spacing: -3.5px;
  font-family: "Inconsolata", monospace;
  @media (max-width: 800px) {
    /* border: solid orange; */
    width: 97%;
    height: 70vh;
    padding-top: 10px;
    align-items: flex-start;
    font-size: 4.5vw;
    line-height: 26px;
    word-spacing: -1.5vw;
  }
`;
export const SecondSection = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  height: 95vh;
  .Habilities {
    font-size: 3.3vw;
    letter-spacing: 2px;
    color: #00b100;
    font-family: "PressStart", sans-serif;
  }
  @media (max-width: 800px) {
    /* border: solid tomato; */
    height: 73vh;
    .Habilities {
      font-size: 6vw;
    }
  }
`;
export const TechnologiesBox = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TechnologiesDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 45vw;
  padding-left: 25px;
  h2 {
    font-family: "Inconsolata", monospace;
    position: relative;
    top: -4vh;
    font-size: 3.3vw;
    color: #00b100;
  }
  p {
    font-size: 2.35vw;
    line-height: 38px;
    text-align: justify;
    word-spacing: -10px;
    letter-spacing: -1px;
    color: #00b100;
    font-family: "Incosolata", monospace;
  }
  @media (max-width: 800px) {
    width: 92%;
    height: 15vh;
    padding-left: 0;
    h2 {
      display: none;
    }
    p {
      padding-top:5px;
      font-size: 4.3vw;
      word-spacing: -0.9vw;
      line-height: 3vh;
    }
  }
`;
export const TechnologiesImagesBox = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 45vw;
  height: 75vh;
  gap: 50px;
  padding-left: 1vw;
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18.5vh;
    width: 9.5vw;
    border-radius: 10px 20px 0px;
    background-color: #c4c4c4;
    transition: ease 0.3s;
    &:hover {
      transform: scale(105%);
      object-fit: cover;
      background-color: #000;
      border: solid 2px #00b100;
      .darkImage {
        opacity: 0;
      }
      .lightImage,
      .styledComponent {
        opacity: 1;
        z-index: 10;
      }
    }
  }
  .lightImage,
  .styledComponent {
    left: -3.2vw;
    z-index: -1;
    opacity: 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    /* border: solid rebeccapurple; */
    height: 70vh;
    padding-left: 0vw;
    figure {
      height: 14vh;
      width: 26vw;
      .darkImage {
        display: none;
      }
    }
    .lightImage,
    .styledComponent {
      left: 0;
      opacity: 1;
      z-index: 10;
    }
  }
`;
export const TechnologiesImages = styled.img`
  position: relative;
  left: 3.4vw;
  width: 7vw;
  height: 14vh;
  transition: ease-in-out 0.3s;
  @media (max-width: 800px) {
    left: 10vw;
    width: 18vw;
    height: 13vh;
    object-fit: scale-down;
  }
`;
