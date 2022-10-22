import React, { useState, useEffect } from "react";
import {Fundo} from "../Style/style.js"
import * as S from "./home_style.js";
import robot from "../Style/Assets/robotblack.png";
import laptop from "../Style/Assets/laptop.png";
import error from "../Style/Assets/system_error3.gif";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const Word = "Oi, eu sou o João";
  const Word2 = "Desenvolvedor front-end.";
  const [description, setDescription] = useState("Passe o cursor do mouse no card para ler")
  const arrayText = Word.split("");
  const [secondAdd, setsecondAdd] = useState("");
  const [i, setI] = useState(0);
  const [a, setA] = useState(0);
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState("");
  const [fundo, setFundo] = useState(false)
  const [technology, setTechnology] = useState('')
  
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
      setFundo(true)
    },1000)
  },[])
  const Description = (id) => {
    if (id === '1') {
      setDescription('Linguagem de marcação utilizada na construção de páginas Web.')
      setTechnology('HTML')
    } else if (id === '2') {
      setTechnology('JavaScript')
      setDescription('É uma linguagem de programação, juntamente com HTML e CSS, é uma das três principais tecnologias da web.')
    } else if (id === '3') {
      setTechnology('Styled-Component')
      setDescription('É uma Biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos de CSS dentro do Javascript.')
    } else if (id === '4') {
      setTechnology('CSS')
      setDescription('O CSS é uma linguagem de folhas de estilos para adicionar estilo a um documento web.')
    } else if (id === '5') {
      setTechnology('React')
      setDescription('O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuários em páginas web.')
    } else if (id === '6') {
      setTechnology('GitHub')
      setDescription('É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.')
    } else {
      setDescription("Passe o cursor do mouse no card para ler")
    }
  }
  // style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}
  return (
    <Fundo style={{height:'100vh', width:'100%'}}>
      <S.Home>
        <S.HomeSection>
          <S.HelloBox>
            <S.NameBox data-aos="fade-right" data-aos-easing="ease-in-out" >
              <h1>{add}</h1>
              {open && <img src={robot} alt="" loading="lazy" />}
            </S.NameBox>
            <S.DevelopBox>
              <h2>{secondAdd}</h2>
            </S.DevelopBox>
          </S.HelloBox>
          <S.LaptopBox>
            <figure>
              <S.LaptopImage className="laptop" onClick={() => { setFundo(!fundo) }} src={laptop} alt="" loading="lazy" style={fundo ? {opacity:'1'}:  {opacity:'0'}}  />
            </figure>
            <figure>
              <S.ErrorGif src={error} alt="" loading="lazy" style={fundo ? {opacity:'1'}: {opacity:'0'}}/>
            </figure>
          </S.LaptopBox>
        </S.HomeSection>
      </S.Home>
    </Fundo>
  );
}
