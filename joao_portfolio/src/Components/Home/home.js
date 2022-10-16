import React, { useState, useEffect } from "react";
import * as S from "./home_style.js";
import robot from "../Style/Assets/robotblack.png";
import laptop from "../Style/Assets/laptop.png";
import error from "../Style/Assets/error.gif";
import coding from "../Style/Assets/coding.png";
import system_error from "../Style/Assets/system_error2.gif";
import darkhtml from "../Style/Assets/darkhtml.png"
import darkcss from "../Style/Assets/darkcss.png"
import darkjavascript from "../Style/Assets/darkjavascript.png"
import darkreact from "../Style/Assets/darkreact.png"
import darkgithub from "../Style/Assets/darkgithub.png"
import darkstyledcomponents from "../Style/Assets/darkstyledcomponent.png"
import html5 from "../Style/Assets/lightHTML.png"
import css3 from "../Style/Assets/lightCSS.png"
import javaScript from "../Style/Assets/lightJAVASCRIPT.png"
import react from "../Style/Assets/lightREACT.png"
import styledComponent from "../Style/Assets/styled-components.png"
import github from "../Style/Assets/lightGITHUB.png"
import teste from "../Style/Assets/teste3.gif"
import teste5 from "../Style/Assets/teste5.gif"
import Aos from "aos";
import "aos/dist/aos.css"


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
  const [fundo, setFundo] = useState(true)
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
    // if(a === Word.length ){
    //             setTimeout(()=>{
    //                       setAdd(add.substring(0, add.length -1))
    //                 },225)
    //                 console.log(add)
    //             }
  }, [add, secondAdd, open]);
  // setInterval(()=>{
  //     setC(c+1)
  //     console.log(c)
  // },300)
  // useEffect(() => {
  //     if(i >= Word.length - 1){
  //             setI(i+1)
  //             setTimeout(()=>{
  //                 setAdd('Desenvolvedor front-end')
  //             }, 6000)
  //         }
  // }, [add])
  useEffect(()=>{
    Aos.init({
      duration:1500,
      anchorPlacement:'top-center',
      once:false,
      mirror:false
    })
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
  return (
    <S.Fundo style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}>
      <S.Home>
        <S.FirstSection>
          <S.HelloBox>
            <S.NameBox data-aos="fade-right" data-aos-easing="ease-in-out" >
              <h1>{add}</h1>
              {open && <img src={robot} alt="" />}
            </S.NameBox>
            <S.DevelopBox>
              <h2>{secondAdd}</h2>
            </S.DevelopBox>
          </S.HelloBox>
          <S.LaptopBox>
            <figure>
              <S.LaptopImage onClick={() => { setFundo(!fundo) }} src={laptop} alt="" data-aos="fade-left" data-aos-easing="ease-in-out"/>
            </figure>
            <figure>
              <S.ErrorGif src={error} alt=""  data-aos="fade-left" data-aos-easing="ease-in-out"></S.ErrorGif>
            </figure>
          </S.LaptopBox>
        </S.FirstSection>
        {/* top-bottom
top-center
top-top
center-bottom
center-center
center-top
bottom-bottom
bottom-center
bottom-top */}
        <S.SecondSection >
          <S.CodingBox data-aos="fade-right" data-aos-easing="ease-in-out"  data-aos-anchor-placement="center-bottom">
            <figure >
              <S.CodingImage src={coding} alt="" />
            </figure>
            <figure >
              <S.System_Erro_Image src={system_error} alt="" ></S.System_Erro_Image> 
            </figure>
          </S.CodingBox>
          <S.AboutMeBox data-aos="fade-left" data-aos-easing="ease-in-out"  data-aos-anchor-placement="center-bottom">
            <h2>Sobre mim</h2>
            <S.AboutMeText>
              <p>
                Meu nome é João Pedro, tenho 20 e anos sou um apaixonado por tecnologia e um
                entusiasta por resolução de problemas e desafios que me levaram
                a trilhar o caminho da programação. Em março de 2022 ingressei
                no Vai na Web, onde aprendi os principais conceitos de front-end
                e coloquei em prática nos meus projetos, pouco a pouco com muita
                curiosidade e um toque de criatividade me tornei mais fascinado
                pela área por seus desafios e suas possibilidades.
              </p>
            </S.AboutMeText>
          </S.AboutMeBox>
        </S.SecondSection>
        <S.ThirdSection>
          <h2 className="Habilities"  data-aos="fade-down"  data-aos-anchor-placement="center-bottom">Habilidades</h2>
          <S.TechnologiesBox>
            <S.TechnologiesDescription data-aos="fade-right">
              <h2>{technology}</h2>
              <p>{description}</p>
            </S.TechnologiesDescription>
            <S.TechnologiesImagesBox data-aos="fade-left" >
              <figure id="1" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkhtml} alt="" />
                <S.TechnologiesImages id="1" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={html5} alt="" />
              </figure>
              <figure id="2" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkjavascript} alt="" />
                <S.TechnologiesImages id="2" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={javaScript} alt="" />
              </figure>
              <figure id="3" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkstyledcomponents} alt="" />
                <S.TechnologiesImages id="3" onMouseOver={(e) => { Description(e.target.id) }} className="styledComponent" src={styledComponent} alt="" />
              </figure>
              <figure id="4" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }}  >
                <S.TechnologiesImages className="darkImage" src={darkcss} alt="" />
                <S.TechnologiesImages id="4" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={css3} alt="" />
              </figure>
              <figure id="5" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkreact} alt="" />
                <S.TechnologiesImages id="5" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={react} alt="" />
              </figure>
              <figure id="6" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }}>
                <S.TechnologiesImages className="darkImage" src={darkgithub} alt="" />
                <S.TechnologiesImages id="6" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={github} alt="" />
              </figure>
            </S.TechnologiesImagesBox>
          </S.TechnologiesBox>
        </S.ThirdSection>
      </S.Home>
    </S.Fundo>
  );
}
