import styled from "styled-components";
import PressStart from "../Style/Assets/PressStart2P-vaV7.ttf";
import Carousel from "nuka-carousel/lib/carousel";

export const Fundo = styled.div`
  cursor: url({testeCursor}), auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 99.3vw;
  height: 280vh;
  cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAEAAQCoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAFAAAABgAAAAUAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAADAAAAGkAAABpAAAAaQAAAAoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAABAAAAAwAAAAwAAABp/////////////////////wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAGkAAABpAAAACQAAAAYAAAAIAAAAFf////8PDw//KSkp/ykpKf//////AAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG//////////8AAABpAAAAEQAAABMAAABpDw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn/////Dw8P//////8AAABpAAAAIv////8PDw//KSkp/ykpKf8pKSn//////wAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P//////8AAABpDw8P/xcXF/8pKSn/KSkp//////8AAAAOAAAABgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8PDw//Dw8P//////8PDw//KSkp/ykpKf8pKSn//////wAAAGkAAABpAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/w8PD/8PDw//Dw8P/xcXF/8pKSn/KSkp//////////////////////8AAABpAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P/w8PD/8ICAj/KSkp/ykpKf8pKSn/KSkp/ykpKf8pKSn/KSkp//////8AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8ICAj/Dw8P/w8PD/8XFxf/FxcX/ykpKf8pKSn/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/wAAAP8ICAj/CAgI/w8PD/8XFxf/FxcX/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//AAAA/wAAAP8AAAD/Dw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/////w8PD/8AAAD/CAgI/w8PD/8XFxf/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/////Dw8P/wgICP8PDw//FxcX/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv////8PDw//Dw8P/xcXF/8pKSn/KSkp//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/////w8PD/8XFxf/KSkp/ykpKf//////AAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb/////Dw8P/ykpKf8pKSn//////wAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP////8PDw//Dw8P//////8AAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////////////////AAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////8P///+D///ng///4wP//+EH///gB///4AH//+AA///gAf//4AP//+AH///gD///4B///+A////gf///4P///+H////j/////////8="),
    auto;
  overflow: hidden;
`;

export const Home = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  text-align: center;
  top: 13vh;
  width: 90%;
  height: 260vh;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0px 0px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  h1 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 21vh;
    font-size: 45px;
    font-family: "PressStart", sans-serif;
    color: #00b100;
    /* color:#fff ; */
    word-spacing: -22px;
  }
  h2 {
    font-size: 28px;
    word-spacing: -10px;
  }

  @font-face {
    font-family: "PressStart";
    src: url(${PressStart}) format("truetype");
  }
`;
export const FirstSectionWork = styled.section`
display: flex;
justify-content: center;
align-items: center;
/* border: solid tomato; */
height: 81vh;
`;
export const Carrosel = styled(Carousel)`
figure{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid red; */
  height: 79.1vh;
  
}
`
export const carouselImages = styled.img`
position: absolute;
top: 6.6vh;
right: 18vw;
height: 53.3vh;
width: 40.1vw;
border-radius: 1px;
transition: ease-in-out 0.4s;
  transform: scale(101%);
cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////AAAALgAAAC4AAAAsAAAAJQAAABsAAAAQAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////1tbW/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAALgAAAC0AAAAtAAAAJQAAABkAAAANAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAJwAAAC0AAAArAAAAIQAAABQAAAAJAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////W1tb/1tbW/9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAKQAAAC0AAAAoAAAAHAAAAA8AAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP9bW1v/W1tb/1tbW/9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAALAAAACwAAAAiAAAAEwAAAAgAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP9bW1v/W1tb/1tbW/9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAoAAAALQAAACYAAAAYAAAACwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP9bW1v/W1tb/1tbW/9bW1v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAtAAAAKQAAABsAAAAOAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/1tbW/9bW1v/W1tb/1tbW/9bW1v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAArAAAAHgAAAA8AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/1tbW/9bW1v/W1tb/1tbW/9bW1v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAALQAAACwAAAAfAAAAEAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/1tbW/9bW1v/W1tb/1tbW/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAsAAAAKwAAAB8AAAARAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/FxcX/1tbW/9bW1v/W1tb/1tbW/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAArAAAAHgAAAA8AAAAGAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/W1tb/1tbW/9bW1v/W1tb/1tbW/8AAAD/AAAA/wAAAP//////AAAA/wAAAP//////AAAALgAAACoAAAAcAAAADgAAAAUAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAP8AAAD/AAAA/wAAAP8AAAD/W1tb/1tbW/9bW1v//////1tbW/8AAAD/AAAA//////8AAAD/AAAA//////8AAAAuAAAAJwAAABgAAAAMAAAAAwAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/W1tb/1tbW///////W1tb/wAAAP8AAAD//////wAAAP8AAAD//////wAAACwAAAAiAAAAEwAAAAkAAAACAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD///////////8AAAD/AAAA/wAAAP8AAAD//////wAAAP9bW1v/W1tb//////9bW1v/W1tb/wAAAP//////AAAA//////8AAAAvAAAAJwAAABsAAAAOAAAABgAAAAEAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP///////////wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP9bW1v//////1tbW/9bW1v/W1tb////////////AAAAMQAAACsAAAAfAAAAEgAAAAkAAAADAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAD/AAAA/wAAAP//////W1tb/1tbW/9bW1v//////wAAADQAAAAuAAAAIgAAABUAAAALAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAP8AAAD/AAAA//////9bW1v/W1tb/1tbW///////AAAALwAAACQAAAAXAAAADQAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP8AAAD//////////////////////wAAACwAAAAjAAAAGAAAAA4AAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAD/AAAA/wAAAP//////AAAALgAAAC0AAAAoAAAAIQAAABcAAAAOAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAP8AAAD/AAAA//////8AAAApAAAAIwAAABsAAAATAAAADAAAAAYAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP//////////////////////AAAAKAAAAB8AAAAWAAAADwAAAAkAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAArAAAALgAAACgAAAAfAAAAFAAAAAsAAAAHAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAArAAAAIQAAABUAAAAMAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP//////AAAALgAAACkAAAAcAAAADwAAAAcAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAuAAAAJwAAABkAAAALAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAAjAAAAFAAAAAkAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAArAAAAKwAAAB8AAAARAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAHQAAAB0AAAAdAAAAKwAAACsAAAAmAAAAGQAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAYAAAAdAAAAHQAAAB0AAAAdAAAAKwAAAB8AAAASAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABwAAABAAAAAdAAAAJQAAACUAAAAfAAAAFAAAAAsAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AD///gAf//wAD//4AAf/8AAD//AAA//gAAH/4AAB/8AAAf/AAAH/gAAB/wAAAf8AAAH+AAAB/gAAA/4AAAf+BAAP/wwAD//8AB///AD///wA///8Af///A////wP///8D////A////wP///+H///////////////////////8="),pointer;

`
export const carouselImagesTwo = styled.img`
position: absolute;
top: -16.5vh;
height: 115vh;
`