import { Link } from "react-router-dom";
import styled from "styled-components";
export const RouteBox = styled.section`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0px 0px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  height: 10vh;
`;
export const Links = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.isOn ? '#00b100': '#ffff')};
  font-size: 1.70vw;
  font-family: "PressStart", sans-serif;
  cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////AAAALgAAAC4AAAAsAAAAJQAAABsAAAAQAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////1tbW/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAALgAAAC0AAAAtAAAAJQAAABkAAAANAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAJwAAAC0AAAArAAAAIQAAABQAAAAJAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////W1tb/1tbW/9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAKQAAAC0AAAAoAAAAHAAAAA8AAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP9bW1v/W1tb/1tbW/9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAALAAAACwAAAAiAAAAEwAAAAgAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP9bW1v/W1tb/1tbW/9bW1v/W1tb/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAoAAAALQAAACYAAAAYAAAACwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP9bW1v/W1tb/1tbW/9bW1v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAtAAAAKQAAABsAAAAOAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/1tbW/9bW1v/W1tb/1tbW/9bW1v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAArAAAAHgAAAA8AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/1tbW/9bW1v/W1tb/1tbW/9bW1v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAALQAAACwAAAAfAAAAEAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/1tbW/9bW1v/W1tb/1tbW/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAsAAAAKwAAAB8AAAARAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/FxcX/1tbW/9bW1v/W1tb/1tbW/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAArAAAAHgAAAA8AAAAGAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/W1tb/1tbW/9bW1v/W1tb/1tbW/8AAAD/AAAA/wAAAP//////AAAA/wAAAP//////AAAALgAAACoAAAAcAAAADgAAAAUAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAP8AAAD/AAAA/wAAAP8AAAD/W1tb/1tbW/9bW1v//////1tbW/8AAAD/AAAA//////8AAAD/AAAA//////8AAAAuAAAAJwAAABgAAAAMAAAAAwAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/W1tb/1tbW///////W1tb/wAAAP8AAAD//////wAAAP8AAAD//////wAAACwAAAAiAAAAEwAAAAkAAAACAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD///////////8AAAD/AAAA/wAAAP8AAAD//////wAAAP9bW1v/W1tb//////9bW1v/W1tb/wAAAP//////AAAA//////8AAAAvAAAAJwAAABsAAAAOAAAABgAAAAEAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP///////////wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP9bW1v//////1tbW/9bW1v/W1tb////////////AAAAMQAAACsAAAAfAAAAEgAAAAkAAAADAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAD/AAAA/wAAAP//////W1tb/1tbW/9bW1v//////wAAADQAAAAuAAAAIgAAABUAAAALAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAP8AAAD/AAAA//////9bW1v/W1tb/1tbW///////AAAALwAAACQAAAAXAAAADQAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP//////AAAA/wAAAP8AAAD//////////////////////wAAACwAAAAjAAAAGAAAAA4AAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAD/AAAA/wAAAP//////AAAALgAAAC0AAAAoAAAAIQAAABcAAAAOAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAP8AAAD/AAAA//////8AAAApAAAAIwAAABsAAAATAAAADAAAAAYAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP//////////////////////AAAAKAAAAB8AAAAWAAAADwAAAAkAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAArAAAALgAAACgAAAAfAAAAFAAAAAsAAAAHAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAArAAAAIQAAABUAAAAMAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP//////AAAALgAAACkAAAAcAAAADwAAAAcAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAuAAAAJwAAABkAAAALAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD//////wAAAC0AAAAjAAAAFAAAAAkAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAArAAAAKwAAAB8AAAARAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAHQAAAB0AAAAdAAAAKwAAACsAAAAmAAAAGQAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAYAAAAdAAAAHQAAAB0AAAAdAAAAKwAAAB8AAAASAAAACAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABwAAABAAAAAdAAAAJQAAACUAAAAfAAAAFAAAAAsAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AD///gAf//wAD//4AAf/8AAD//AAA//gAAH/4AAB/8AAAf/AAAH/gAAB/wAAAf8AAAH+AAAB/gAAA/4AAAf+BAAP/wwAD//8AB///AD///wA///8Af///A////wP///8D////A////wP///+H///////////////////////8="),pointer;
  letter-spacing: 1px;
  &:hover {
    color: #00b100;
    text-shadow: black -3px 0, black 3px 0;
  }
  &:active {
    color: #ffff;
    transition: ease-in-out 0.5s;
    text-shadow: red -3px 0, cyan 3px 0;
  }
  @media (max-width:800px) {
    font-size: 3.2vw;
  }
`;

export const UL = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  img {
    position: relative;
    top: 0.8vh;
    right: 4.5vw;
    height: 15vh;
    width:7vw;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
  }
  @media (max-width:900px) {
  img{
    top: 0.2vh;
    right: 0vw;
    width: 16vw;
    height: 8vh;
    object-fit: scale-down;
  }
  }
`;
export const LI = styled.li``;
