import styled from "styled-components";
import PressStart from "../Style/Assets/PressStart2P-vaV7.ttf";
export const Fundo = styled.div`
  cursor: url({testeCursor}), auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAEAAQCoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAFAAAABgAAAAUAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAADAAAAGkAAABpAAAAaQAAAAoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAABAAAAAwAAAAwAAABp/////////////////////wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAGkAAABpAAAACQAAAAYAAAAIAAAAFf////8PDw//KSkp/ykpKf//////AAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG//////////8AAABpAAAAEQAAABMAAABpDw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn/////Dw8P//////8AAABpAAAAIv////8PDw//KSkp/ykpKf8pKSn//////wAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P//////8AAABpDw8P/xcXF/8pKSn/KSkp//////8AAAAOAAAABgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8PDw//Dw8P//////8PDw//KSkp/ykpKf8pKSn//////wAAAGkAAABpAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/w8PD/8PDw//Dw8P/xcXF/8pKSn/KSkp//////////////////////8AAABpAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P/w8PD/8ICAj/KSkp/ykpKf8pKSn/KSkp/ykpKf8pKSn/KSkp//////8AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8ICAj/Dw8P/w8PD/8XFxf/FxcX/ykpKf8pKSn/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/wAAAP8ICAj/CAgI/w8PD/8XFxf/FxcX/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//AAAA/wAAAP8AAAD/Dw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8AAAD/CAgI/w8PD/8XFxf/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/wgICP8PDw//FxcX/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/////w8PD/8XFxf/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb/////Dw8P/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP////8PDw//Dw8P//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////AAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////8P///+D///ng///4wP//+EH///gB///4AH//+AA///gAf//4AP//+AH///gD///4B///+A////gf///4P///+H////j/////////8="),
    auto;
  overflow: hidden;
  /* opacity: 1;
    
    background: linear-gradient(180deg, #000, #00B100, #000);
    animation: glow 6s linear 0s infinite normal none;
    background-size: 1px 90%;
@keyframes glow {
    0% {
        background-position: 0px -10vh;
    }

    100% {
        background-position: 0px  280vh;
    }
} */
`;
export const Home = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  top: 14vh;
  width: 90%;
  height: 78vh;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0px 0px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  h1,
  h2 {
    font-size: 43px;
    font-family: "PressStart", sans-serif;
    /* color: #a404de; */
    color: #00b100;
    word-spacing: -22px;
  }
  h2 {
    font-size: 29px;
    word-spacing: -10px;
  }

  @font-face {
    font-family: "PressStart";
    src: url(${PressStart}) format("truetype");
  }
`;
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
`;
export const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  width:57.5vw;
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
`;
export const DevelopBox = styled.div`
  padding-top: 20px;
`;
export const LaptopBox = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 30vw;
  height: 64vh;
`;
export const LaptopImage = styled.img`

  width: 28vw;
height: 60vh;
  opacity: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  animation: other 3.5s infinite ease-in normal forwards;
  transition: ease-in-out 0.8s;
  @keyframes other {
    0% {
      transform: translate(-1px, -1px);
    }
    25% {
      transform: translate(3.5px, 6.5px);
    }
  }
`;








// export const SecondSection = styled.section`
//   display: flex;
//   width: 100%;
//   height: 85vh;
// `;
// export const CodingBox = styled.div`
//   position: relative;
// `;
// export const CodingImage = styled.img`
//   height: 80vh;
// `;
// export const System_Erro_Image = styled.img`
//   position: absolute;
//   top: 11.5vh;
//   right: 16.7vw;
//   height: 20vh;
// `;
// export const AboutMeBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #00b100;
//   width: 50vw;
//   text-align: center;
//   h2 {
//     display: flex;
//     justify-content: center;
//     align-items: flex-end;
//     font-size: 52px;
//     height: 21vh;
//   }
// `;
// export const AboutMeText = styled.div`
//   display: flex;
//   align-items: flex-end;
//   text-align: justify;
//   height: 50vh;
//   width: 95%;
//   font-size: 25px;
//   line-height: 30px;
//   p {
//     word-spacing: -3.5px;
//     font-family: "Inconsolata", monospace;
//   }
// `;
// export const ThirdSection = styled.section`
//   display: flex;
//   text-align: center;
//   flex-direction: column;
//   justify-content: flex-end;
//   height: 95vh;
//   .Habilities {
//     font-size: 45px;
//     letter-spacing: 2px;
//   }
// `;
// export const TechnologiesBox = styled.div`
//   display: flex;
//   width: 100%;
//   height: 80vh;
// `;
// export const TechnologiesDescription = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 45vw;
//   padding-left: 15px;
//   h2 {
//     font-family: "Inconsolata", monospace;
//     position: relative;
//     top: -5vh;
//     font-size: 40px;
//   }
//   p {
//     text-align: justify;
//     font-size: 32px;
//     line-height: 38px;
//     text-align: center;
//     color: #00b100;
//     font-family: "Incosolata", monospace;
//   }
// `;
// export const TechnologiesImagesBox = styled.section`
//   position: relative;
//   display: flex;
//   align-items: center;
//   align-content: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   width: 45vw;
//   height: 75vh;
//   gap: 50px;
//   figure {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 18.5vh;
//     width: 9.5vw;
//     border-radius: 10px 20px 0px;
//     background-color: #c4c4c4;
//     transition: ease 0.3s;
//     &:hover {
//       transform: scale(105%);
//       object-fit: cover;
//       background-color: #000;
//       border: solid 2px #00b100;
//       .darkImage {
//         opacity: 0;
//       }
//       .lightImage,
//       .styledComponent {
//         opacity: 1;
//         z-index: 10;
//       }
//     }
//   }
//   .lightImage,
//   .styledComponent {
//     left: -3.2vw;
//     z-index: -1;
//     opacity: 0;
//   }
// `;
// export const TechnologiesImages = styled.img`
//   position: relative;
//   left: 3.4vw;
//   height: 14vh;
//   object-fit: cover;
//   transition: ease-in-out 0.3s;
// `;
