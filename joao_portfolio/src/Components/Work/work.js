import React, { useState, useEffect } from "react";
import {Fundo} from "../Style/style.js"
import * as S from "./work_style.js"
import teste from "../Style/Assets/teste3.gif"
import teste5 from "../Style/Assets/teste5.gif"
import dogApi from "../Style/Assets/dogApi.png"
import filmes from "../Style/Assets/filmes.png"
import codar from "../Style/Assets/codar.png"
import todoList from "../Style/Assets/todoList.png"
import portflow from "../Style/Assets/portflow.png"
import lol from "../Style/Assets/lol.png"
import recipes from "../Style/Assets/recipes.png"
import calculadora from "../Style/Assets/calculadora.png"
import laptop from "../Style/Assets/notebook.png"
import Aos from "aos";
import "aos/dist/aos.css"

export default function Work() {
    const Carrosel = {
        width: '75vw',
        height: '80vh',
        cursor: 'pointer',
        border:'solid red'
    }

    const [fundo, setFundo] = useState(true)
    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: false,
            mirror: false
        })
    }, [])
    const configCarousel ={
        renderBottomCenterControls:false,
        cellAlign:"center",
        slidesToShow:1,
        style:Carrosel,
        wrapAround:true,
        speed:900,
        defaultControlsConfig:{
                nextButtonText: '»',
                nextButtonStyle: {
                    position: 'relative',
                    top: '-4vh',
                    right: '3.5vw',
                    color: "#00B100",
                    fontSize: '140px',
                    backgroundColor: 'transparent',
                    width: '4.5vw',
                    height: '8vh',
                },
                prevButtonText: '«',
                prevButtonStyle: {
                    position: 'relative',
                    top: '-4vh',
                    color: "#00B100",
                    fontSize: '140px',
                    backgroundColor: 'transparent',
                    width: '4.5vw',
                    height: '8vh',
                },
        }}

        // style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}
    return (
        <Fundo style={{height:'240vh'}}>
            <S.Home style={{height:'218vh'}}>
                <h1 data-aos="fade-down" >Projetos</h1 >
                <S.FirstSectionWork data-aos="zoom-in" >
                    <S.Carrosel  {...configCarousel}  >
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="https://jaoflix.vercel.app/"><S.carouselImagesTwo src={filmes} alt="" /></a>
                                <figcaption>JãoFlix - Projeto criado em React usando Styled-Component e Axios para consumir a API dos filmes da IMDb.</figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="http://dog-api-nine.vercel.app/"><S.carouselImagesTwo src={dogApi} alt="" /></a>
                                <figcaption style={{ lineHeight: '30px' }}>Página de Adoção - Projeto criado em React usando Styled-Component e Axios consumindo a API dos cachorros e gatos.</figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="https://to-do-list-vnw.vercel.app/"><S.carouselImagesTwo src={todoList} alt="" /></a>
                                <figcaption style={{ lineHeight: '30px', wordSpacing: '-4.6px' }}>ToDo List - Projeto criado utilizando React na parte lógica de adicionar tarefas e Styled-Component na estilização da página.</figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="https://calculadora-react-vnw.vercel.app/"><S.carouselImagesTwo src={calculadora} alt="" /></a>
                                <figcaption> Calculadora - Projeto criado em React utilizado na parte lógica dos cálculos e Styled-Component na estilização da página. </figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="http://recipes-gray-six.vercel.app/"><S.carouselImagesTwo src={recipes} alt="" /></a>
                                <figcaption>Pair Programming - Projeto feito em dupla a partir github, criado em React usando Styled-Component  na estilização da página. </figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="https://silvajpedro.github.io/Portflow/"><S.carouselImagesTwo src={portflow} alt="" /></a>
                                <figcaption style={{ fontSize: '25px' }}>Portflow - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox, responsividade e criação de um menu hambúrguer para mobile. </figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="https://silvajpedro.github.io/Desafio_login_LoL/"><S.carouselImagesTwo src={lol} alt="" /></a>
                                <figcaption>Página Login LoL - Projeto feito em HTML/CSS/JavaScript sendo uma página de login que é interativa com o usuário. </figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                            <S.CarroselBoxImages>
                        <figure>
                            <S.carouselImages src={laptop} alt="" />
                                <a href="https://silvajpedro.github.io/DevChallenge_Codar/"><S.carouselImagesTwo src={codar} alt="" /></a>
                                <figcaption>Página Codar - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox e responsividade. </figcaption>
                        </figure>
                            </S.CarroselBoxImages>
                    </S.Carrosel>
                </S.FirstSectionWork>
                <S.SecondSectionWork>

                </S.SecondSectionWork>
            </S.Home>
        </Fundo>
    )
}