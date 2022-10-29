import styled from "styled-components";

export const FirstSection = styled.section`
  position: relative;
  top: 2vh;
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width:800px) {
    flex-direction: column;
    /* border: solid red; */
    height: 82vh;
  }
  `;
export const CodingBox = styled.figure`
  display: flex;
  justify-content:center;
  width: 41vw;
  @media (max-width:800px) {
    width: 100%;
  }
`;
export const CodingImage = styled.img`
  height: 78vh;
  width: 39vw;
  border-radius: 10px;
  padding-left: 2vw;
  @media (max-width:800px) {
    width: 70vw;
    height: 30vh;
    object-fit: scale-down;
  }
  `;
export const AboutMeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #00b100;
  width: 50vw;
  height: 77vh;
  text-align: center;
  /* border: solid greenyellow; */
  h2 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 3vw;
    height: 21vh;
    font-family: "PressStart", sans-serif;
  }
  @media (max-width:800px) {
    /* border: solid yellowgreen; */
    height: 49vh;
    width: 100%;
   padding-left:10px;
   padding-right:10px;
   h2{
    align-items: flex-end;
    /* border: solid purple; */
    height: 6vh;
    font-size: 4vw;
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
  line-height: 30px;
  word-spacing: -3.5px;
  font-family: "Inconsolata", monospace;
  @media (max-width:800px) {
    /* border: solid orange; */
    width: 100%;
    height: 43vh;
    align-items: center;
    font-size: 3.5vw;
  }
`;
export const SecondSection = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  height: 95vh;
  .Habilities {
    font-size: 3.30vw;
    letter-spacing: 2px;
    color: #00b100;
    font-family: "PressStart", sans-serif;
  }
`;
export const TechnologiesBox = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
`;
export const TechnologiesDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45vw;
  padding-left: 25px;
  h2 {
    font-family: "Inconsolata", monospace;
    position: relative;
    top: -4vh;
    font-size: 3.30vw;
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
`;
export const TechnologiesImages = styled.img`
  position: relative;
  left: 3.4vw;
  width:7vw ;
  height: 14vh;
  transition: ease-in-out 0.3s;
`;
