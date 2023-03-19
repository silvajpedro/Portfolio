import React, { useState, useEffect } from "react";
import {Fundo, Home} from "../Style/style.js"
import * as S from "./home_style.js";
import robot from "../Style/Assets/robotblack.svg";
import laptop from "../Style/Assets/testenote.gif";

export default function FirstComponent() {
  const Word = "Oi, eu sou o João";
  const Word2 = "Desenvolvedor front-end.";
  const arrayText = Word.split("");
  const [add, setAdd] = useState("");
  const [secondAdd, setsecondAdd] = useState("");
  const [i, setI] = useState(0);
  const [a, setA] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false)
  useEffect(() => {
    const secondArrayText = Word2.split("");
    if (i < Word.length) {
      setI(i + 1);
      setTimeout(() => {
        setAdd(add.concat(arrayText[i]));
      }, 240);
      setTimeout(() => {
        setOpen(true);
      }, 4500);
    } else if (a < Word2.length && open === true) {
      setA(a + 1);
      setTimeout(() => {
        setsecondAdd(secondAdd.concat(secondArrayText[a]));
      }, 200);
    }
    setTimeout(()=>{
      setisOpen(true)
    },1000)
  }, [add, secondAdd, open]);
 
  return (
    <Fundo style={{height:'100vh', width:'100%'}}>
      <Home style={{ height: '78vh', width:'90%'}}>
        <S.HomeSection>
          <S.HelloBox>
            <S.NameBox >
              <h1>{add}</h1>
              {open && <img src={robot} alt="mão robótica de cor verde"  />}
            </S.NameBox>
            <S.DevelopBox>
              <h2>{secondAdd}</h2>
           {open && <S.ResponsiveHand src={robot} alt="mão robótica de cor verde" /> }
            </S.DevelopBox>
          </S.HelloBox>
          <S.LaptopBox>
            <figure>
              <S.LaptopImage className="laptop" src={laptop} alt="laptop com imagem de erro"  style={isOpen? {opacity:'1'}: {opacity:'0'}}  />
            </figure>
          </S.LaptopBox>
        </S.HomeSection>
      </Home>
    </Fundo>
  );
}
