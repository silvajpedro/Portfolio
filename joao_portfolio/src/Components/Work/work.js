import React, { useState, useEffect } from "react";
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
import Carrosel from "./carrosel.js";
export default function Work() {
    const [Open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const today = new Date().toLocaleDateString();
    const Width = window.innerWidth > 800 ? true:false
    useEffect(() => {
        setTimeout(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
    }, [date])
    // style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}
    return (
        <S.Fundo>
            <S.Home>
                <S.FirstSectionTitle  >Projetos</S.FirstSectionTitle >
                <S.FirstSectionWork >
                 { Width &&   <Carrosel >
                        <figure>
                            <a href="https://jaoflix.vercel.app/">
                                <S.carouselImages src={jaoflix} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption>JãoFlix - Projeto criado em React usando Styled-Component e Axios para consumir a API dos filmes da IMDb.</figcaption>
                        </figure>
                        <figure>
                            <a href="http://dog-api-nine.vercel.app/">
                                <S.carouselImages src={dogApi} alt="imagem de notebook com imagem de um site"  loading="lazy"/>
                            </a>
                            <figcaption style={{ lineHeight: '30px' }}>Página de Adoção - Projeto criado em React usando Styled-Component e Axios consumindo a API dos cachorros e gatos.</figcaption>
                        </figure>
                        <figure>
                            <a href="https://to-do-list-vnw.vercel.app/">
                                <S.carouselImages src={todoList} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption style={{ lineHeight: '30px', wordSpacing: '-4.6px' }}>ToDo List - Projeto criado utilizando React na parte lógica de adicionar tarefas e Styled-Component na estilização da página.</figcaption>
                        </figure>
                        <figure>
                            <a href="https://calculadora-react-vnw.vercel.app/">
                                <S.carouselImages src={calculadora} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption> Calculadora - Projeto criado em React utilizado na parte lógica dos cálculos e Styled-Component na estilização da página. </figcaption>
                        </figure>
                        <figure>
                            <a href="http://recipes-gray-six.vercel.app/">
                                <S.carouselImages src={recipes} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption>Pair Programming - Projeto feito em dupla a partir github, criado em React usando Styled-Component  na estilização da página. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/Portflow/">
                                <S.carouselImages src={portflow} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption style={{ fontSize: '25px' }}>Portflow - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox, responsividade e criação de um menu hambúrguer para mobile. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/Desafio_login_LoL/">
                                <S.carouselImages src={lol} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption>Página Login LoL - Projeto feito em HTML/CSS/JavaScript sendo uma página de login que é interativa com o usuário. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/DevChallenge_Codar/">
                                <S.carouselImages src={codar} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption>Página Codar - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox e responsividade. </figcaption>
                        </figure>
                    </Carrosel>}
                    { !Width && <S.ResponsiveSection>
                    <figure>
                            <a href="https://jaoflix.vercel.app/">
                                <S.carouselImages src={jaoflix} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption>JãoFlix - Projeto criado em React usando Styled-Component e Axios para consumir a API dos filmes da IMDb.</figcaption>
                        </figure>
                        <figure>
                            <a href="http://dog-api-nine.vercel.app/">
                                <S.carouselImages src={dogApi} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption style={{ lineHeight: '30px' }}>Página de Adoção - Projeto criado em React usando Styled-Component e Axios consumindo a API dos cachorros e gatos.</figcaption>
                        </figure>
                        <figure>
                            <a href="https://to-do-list-vnw.vercel.app/">
                                <S.carouselImages src={todoList} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption style={{ lineHeight: '30px', wordSpacing: '-4.6px' }}>ToDo List - Projeto criado utilizando React na parte lógica de adicionar tarefas e Styled-Component na estilização da página.</figcaption>
                        </figure>
                        <figure>
                            <a href="https://calculadora-react-vnw.vercel.app/">
                                <S.carouselImages src={calculadora} alt="imagem de notebook com imagem de um site" loading="lazy" />
                            </a>
                            <figcaption> Calculadora - Projeto criado em React utilizado na parte lógica dos cálculos e Styled-Component na estilização da página. </figcaption>
                        </figure>
                        <figure>
                            <a href="http://recipes-gray-six.vercel.app/">
                                <S.carouselImages src={recipes} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption>Pair Programming - Projeto feito em dupla a partir github, criado em React usando Styled-Component  na estilização da página. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/Portflow/">
                                <S.carouselImages src={portflow} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption style={{ fontSize: '25px' }}>Portflow - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox, responsividade e criação de um menu hambúrguer para mobile. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/Desafio_login_LoL/">
                                <S.carouselImages src={lol} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption>Página Login LoL - Projeto feito em HTML/CSS/JavaScript sendo uma página de login que é interativa com o usuário. </figcaption>
                        </figure>
                        <figure>
                            <a href="https://silvajpedro.github.io/DevChallenge_Codar/">
                                <S.carouselImages src={codar} alt="imagem de notebook com imagem de um site" loading="lazy"/>
                            </a>
                            <figcaption>Página Codar - landing page feita em HTML e CSS com intuito de práticar o uso do flexbox e responsividade. </figcaption>
                        </figure>
                        </S.ResponsiveSection>}
                </S.FirstSectionWork>
                <S.SecondSectionWork>
                    <S.CellPhoneBox>
                        <figure style={!Open ? { display: 'flex' } : { display: 'none' }}>
                            <S.Hour>{date}</S.Hour>
                            <S.Date>{today}</S.Date>
                            <S.FirstCellPhone src={celular_bloq} alt="imagem de um celular bloqueado" loading="lazy" />
                        </figure>
                        <a href='https://github.com/silvajpedro' style={!Open ? { display: 'none' } : { display: 'flex' }}>
                            <S.SecondCellPhone src={celular} alt="imagem de um celular aberto no github" loading="lazy" />
                        </a>
                        <S.BoxButton onClick={() => { setOpen(!Open) }} >
                        </S.BoxButton>
                    </S.CellPhoneBox>
                    <S.Footer>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-belo/">
                            <S.LinksImages src={linkedin} alt="icone link para linkedin"  loading="lazy"/>
                        </a>
                        <a href="https://github.com/silvajpedro">
                            <S.LinksImages src={github} alt="icone link para github" loading="lazy" />
                        </a>
                        <a href="https://www.instagram.com/joao.pda_belo/">
                            <S.LinksImages src={instagram} alt="icone link para instagram" loading="lazy" />
                        </a>
                    </S.Footer>
                </S.SecondSectionWork>
            </S.Home>
        </S.Fundo>
    )
}