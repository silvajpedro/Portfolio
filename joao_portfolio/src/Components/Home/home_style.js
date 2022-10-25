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
    font-size: 3.1vw;
    font-family: "PressStart", sans-serif;
    color: #00b100;
    word-spacing: -22px;
  }
  h2 {
    font-size: 2vw;
    word-spacing: -10px;
  }
`;
export const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  width: 57.5vw;
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
