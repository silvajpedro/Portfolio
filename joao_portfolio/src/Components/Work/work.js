import React, { useState, useEffect } from "react";
import { Fundo, Home } from "../Style/style.js"
import * as S from "./work_style.js"
import celular from "../Style/Assets/github.png"
import celular_bloq from "../Style/Assets/celular_block.png"
import jaoflix from "../Style/Assets/notebook_jaoflix.png"
import dogApi from "../Style/Assets/notebook_dogApi.png"
import todoList from "../Style/Assets/notebook_todoList.png"
import calculadora from "../Style/Assets/notebook_calculadora.png"
import recipes from "../Style/Assets/notebook_recipes.png"
import portflow from "../Style/Assets/notebook_portflow.png"
import lol from "../Style/Assets/notebook_lol.png"
import codar from "../Style/Assets/notebook_codar.png"
import linkedin from "../Style/Assets/linkedin_icon.png"
import github from "../Style/Assets/github_icon.png"
import instagram from "../Style/Assets/instagram_icon.png"
import Aos from "aos";
import "aos/dist/aos.css"
import Carrosel from "./carrosel.js";
export default function Work() {
    const [Open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const today = new Date().toLocaleDateString();
    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: true,
            mirror: false
        })
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
    }, [date])
    // style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}
    return (
        <Fundo style={{ height: '256vh' }}>
            <Home style={{ height: '235vh' }}>
                <S.FirstSectionTitle data-aos="fade-down" >Projetos</S.FirstSectionTitle >
                <S.FirstSectionWork data-aos="zoom-in" >
                    <Carrosel >
                        <figure>
                            <a href="https://jaoflix.vercel.app/">
                                <S.carouselImages src={jaoflix} alt="" />
                            </a>
                            <figcaption>JãoFlix - Projeto criado em React usando Styled-Component e Axios para consumir a API dos filmes da IMDb.</figcaption>
                        </figure>
                        <figure>
                            <a href="http://dog-api-nine.vercel.app/">
                                <S.carouselImages src={dogApi} alt="" />
                            </a>
                            <figcaption style={{ lineHeight: '30px' }}>Página de Adoção - Projeto criado em React usando Styled-Component e Axios consumindo a API dos cachorros e gatos.</figcaption>
                        </figure>
                        <figure>
                            <a href="https://to-do-list-vnw.vercel.app/">
                                <S.carouselImages src={todoList} alt="" />
                            </a>
                            <figcaption style={{ lineHeight: '30px', wordSpacing: '-4.6px' }}>ToDo List - Projeto criado utilizando React na parte lógica de adicionar tarefas e Styled-Component na estilização da página.</figcaption>
                        </figure>
                        <figure>
                            <a href="https://calculadora-react-vnw.vercel.app/">
                                <S.carouselImages src={calculadora} alt="" />
                            </a>
                            <figcaption> Calculadora - Projeto criado em React utilizado na parte lógica dos cálculos e Styled-Component na estilização da página. </figcaption>
                        </figure>
                        <figure>
                            <a href="http://recipes-gray-six.vercel.app/">
                                <S.carouselImages src={recipes} alt="" />
                            </a>
                            <figcaption>Pair Programming - Projeto feito em dupla a partir github, criado em React usando Styled-Component  na estilização da página. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/Portflow/">
                                <S.carouselImages src={portflow} alt="" />
                            </a>
                            <figcaption style={{ fontSize: '25px' }}>Portflow - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox, responsividade e criação de um menu hambúrguer para mobile. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/Desafio_login_LoL/">
                                <S.carouselImages src={lol} alt="" />
                            </a>
                            <figcaption>Página Login LoL - Projeto feito em HTML/CSS/JavaScript sendo uma página de login que é interativa com o usuário. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/DevChallenge_Codar/">
                                <S.carouselImages src={codar} alt="" />
                            </a>
                            <figcaption>Página Codar - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox e responsividade. </figcaption>
                        </figure>
                    </Carrosel>
                </S.FirstSectionWork>
                <S.SecondSectionWork>
                    <S.CellPhoneBox>
                        <figure style={!Open ? { display: 'flex' } : { display: 'none' }}>
                            <S.Hour>{date}</S.Hour>
                            <S.Date>{today}</S.Date>
                            <S.FirstCellPhone src={celular_bloq} alt="" />
                        </figure>
                        <a href='https://github.com/silvajpedro' style={!Open ? { display: 'none' } : { display: 'flex' }}>
                            <S.SecondCellPhone src={celular} alt="" loading="lazy" />
                        </a>
                        <S.BoxButton onClick={() => { setOpen(!Open) }} >
                        </S.BoxButton>
                    </S.CellPhoneBox>
                    <S.Footer>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-belo/">
                            <S.LinksImages src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/silvajpedro">
                            <S.LinksImages src={github} alt="" />
                        </a>
                        <a href="https://www.instagram.com/joao.pda_belo/">
                            <S.LinksImages src={instagram} alt="" />
                        </a>
                    </S.Footer>
                </S.SecondSectionWork>
            </Home>
        </Fundo>
    )
}