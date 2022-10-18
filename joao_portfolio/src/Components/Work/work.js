import React, { useState, useEffect } from "react";
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
        // border: 'solid yellow',
        height: '80vh',
        cursor:'pointer'
    }
    
    const [fundo, setFundo] = useState(true)
    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: false,
            mirror: false
        })
    }, [])
    return (
        <S.Fundo style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}>
            <S.Home>
                <h1 data-aos="fade-down" >Projetos</h1 >
                <S.FirstSectionWork>
                    <S.Carrosel defaultControlsConfig={{
                        nextButtonText: '>',
                        nextButtonStyle: {
                            position: 'relative',
                            right: '-2vw',
                            color: "#00B100",
                            fontSize: '120px',
                            backgroundColor: 'transparent',
                            width: '4.5vw',
                            height: '8vh',
                        },
                        prevButtonText: '<',
                        prevButtonStyle: {
                            position: 'relative',
                            right: '-2vw',
                            color: "#00B100",
                            fontSize: '120px',
                            backgroundColor: 'transparent',
                            width: '4.5vw',
                            height: '8vh',
                        },
                    }}
                        renderBottomCenterControls={false}
                        cellAlign="center"
                        slidesToShow={1}
                        style={Carrosel}>

                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="https://jaoflix.vercel.app/"><S.carouselImages src={filmes} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="http://dog-api-nine.vercel.app/"><S.carouselImages src={dogApi} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="https://to-do-list-vnw.vercel.app/"><S.carouselImages src={todoList} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="https://calculadora-react-vnw.vercel.app/"><S.carouselImages src={calculadora} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="http://recipes-gray-six.vercel.app/"><S.carouselImages src={recipes} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="https://silvajpedro.github.io/Portflow/"><S.carouselImages src={portflow} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="https://silvajpedro.github.io/Desafio_login_LoL/"><S.carouselImages src={lol} alt="" /></a>
                        </figure>
                        <figure>
                            <S.carouselImagesTwo src={laptop} alt="" />
                            <a href="https://silvajpedro.github.io/DevChallenge_Codar/"><S.carouselImages src={codar} alt="" /></a>
                        </figure>
                    </S.Carrosel>
                </S.FirstSectionWork>
            </S.Home>
        </S.Fundo>
    )
}