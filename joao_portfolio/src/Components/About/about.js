import React, { useState } from "react";
import * as S from "./about_style.js"
import coding from "../Style/Assets/coding.png";
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


export default function About() {
  const [description, setDescription] = useState("Passe o cursor do mouse no card para ler")
  const [technology, setTechnology] = useState('')
 
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
    <S.Fundo >
      <S.Home>
        <S.FirstSection >
          <S.CodingBox>
              <S.CodingImage src={coding} alt="ilustração do joão" loading="lazy"  />
          </S.CodingBox>
          <S.AboutMeBox>
            <h2>Sobre mim</h2>
            <S.AboutMeText  >
              <p>
                Meu nome é João Pedro, tenho 20 anos sou um apaixonado por tecnologia e um
                entusiasta por resolução de problemas e desafios que me levaram
                a trilhar o caminho da programação. Em março de 2022 ingressei
                no Vai na Web, onde aprendi os principais conceitos de front-end
                e coloquei em prática nos meus projetos, pouco a pouco com muita
                curiosidade e um toque de criatividade me tornei mais fascinado
                pela área por seus desafios e suas possibilidades.
              </p>
            </S.AboutMeText>
          </S.AboutMeBox>
        </S.FirstSection>
        <S.SecondSection>
          <h2 className="Habilities">Habilidades</h2>
          <S.TechnologiesBox>
            <S.TechnologiesDescription>
              <h2>{technology}</h2>
              <p>{description}</p>
            </S.TechnologiesDescription>
            <S.TechnologiesImagesBox>
              <figure id="1" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkhtml} alt="imagem de html apagado" loading="lazy" />
                <S.TechnologiesImages id="1" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={html5} alt="imagem de html com cores" loading="lazy" />
              </figure>
              <figure id="2" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkjavascript} alt="imagem de javascript apagado" loading="lazy" />
                <S.TechnologiesImages id="2" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={javaScript} alt="imagem de javascript com cores" loading="lazy" />
              </figure>
              <figure id="3" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkstyledcomponents} alt="imagem de styled-component apagado" loading="lazy" />
                <S.TechnologiesImages id="3" onMouseOver={(e) => { Description(e.target.id) }} className="styledComponent" src={styledComponent} alt="imagem de styled-component com cores" loading="lazy" />
              </figure>
              <figure id="4" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }}  >
                <S.TechnologiesImages className="darkImage" src={darkcss} alt="imagem de css apagado" loading="lazy" />
                <S.TechnologiesImages id="4" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={css3} alt="imagem de css com cores" loading="lazy" />
              </figure>
              <figure id="5" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }} >
                <S.TechnologiesImages className="darkImage" src={darkreact} alt="imagem de react apagado" loading="lazy" />
                <S.TechnologiesImages id="5" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={react} alt="imagem de react com cores" loading="lazy" />
              </figure>
              <figure id="6" onMouseOver={(e) => { Description(e.target.id) }} onMouseOut={() => {
                setDescription('Passe o cursor do mouse no card para ler')
                setTechnology('')
              }}>
                <S.TechnologiesImages className="darkImage" src={darkgithub} alt="imagem de github apagado" loading="lazy" />
                <S.TechnologiesImages id="6" onMouseOver={(e) => { Description(e.target.id) }} className="lightImage" src={github} alt="imagem de github com cores" loading="lazy" />
              </figure>
            </S.TechnologiesImagesBox>
          </S.TechnologiesBox>
        </S.SecondSection>
      </S.Home>
    </S.Fundo>
  )
}