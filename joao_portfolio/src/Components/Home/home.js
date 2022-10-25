import React, { useState, useEffect } from "react";
import {Fundo, Home} from "../Style/style.js"
import * as S from "./home_style.js";
import robot from "../Style/Assets/robotblack.png";
import laptop from "../Style/Assets/testenote.gif";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hame() {
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
  }, [add, secondAdd, open]);

  useEffect(()=>{
    Aos.init({
      duration:1500,
      anchorPlacement:'top-center',
      once:true,
      mirror:false
    })
    setTimeout(()=>{
      setisOpen(true)
    },1000)
  },[])
  return (
    <Fundo style={{height:'100vh', width:'100%'}}>
      <Home style={{ height: '78vh', width:'90%'}}>
        <S.HomeSection>
          <S.HelloBox  data-aos="fade-right" data-aos-easing="ease-in-out">
            <S.NameBox >
              <h1>{add}</h1>
              {open && <img src={robot} alt="mão robótica de cor verde" loading="lazy" />}
            </S.NameBox>
            <S.DevelopBox>
              <h2>{secondAdd}</h2>
            </S.DevelopBox>
          </S.HelloBox>
          <S.LaptopBox>
            <figure>
              <S.LaptopImage className="laptop" src={laptop} alt="laptop com imagem de erro" loading="lazy" style={isOpen? {opacity:'1'}: {opacity:'0'}}  />
            </figure>
          </S.LaptopBox>
        </S.HomeSection>
      </Home>
    </Fundo>
  );
}
