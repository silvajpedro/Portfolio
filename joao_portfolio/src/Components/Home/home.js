import React, { useState, useEffect } from "react";
import * as S from "../Style/style.js"
import robot from "../Style/Assets/robotblack.png"
import laptop from "../Style/Assets/laptop.png"
import error from "../Style/Assets/error.gif"
import coding from "../Style/Assets/coding.png"
import system_error from "../Style/Assets/system_error2.gif"
export default function Home() {
    const Word = 'Oi, eu sou o João'
    const Word2 = 'Desenvolvedor front-end.'
    const arrayText = Word.split('')
    const secondArrayText = Word2.split('')
    const [add, setAdd] = useState('')
    const [secondAdd, setsecondAdd] = useState('')
    const [i, setI] = useState(0)
    const [a, setA] = useState(0)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (i < Word.length) {
            setI(i +1)
            setTimeout(() => {
                setAdd(add.concat(arrayText[i]))
            }, 220)
            setTimeout(() => {
                setOpen(true)
            }, 4300)
        } else if (a < Word2.length && open === true) {
            setA(a + 1)
            setTimeout(() => {
                setsecondAdd(secondAdd.concat(secondArrayText[a]))
            }, 200)
        }
        // if(a === Word.length ){
        //             setTimeout(()=>{
        //                       setAdd(add.substring(0, add.length -1))
        //                 },225)
        //                 console.log(add)
        //             }
    }, [add, secondAdd, open])
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
    return (
        <S.Fundo>
            <S.Home>
                <S.PresentationBox>
                    <S.HelloBox>
                    <S.NameBox>
                        <h1>{add}</h1>
                        {open && <img src={robot} alt="" />}
                    </S.NameBox>
                    <S.DevelopBox>
                    <h2>{secondAdd}</h2>
                    </S.DevelopBox>
                    </S.HelloBox>
                <S.ImageBox>
                    <figure>
                        <S.LaptopImage src={laptop} alt=""/>
                    </figure>
                    <figure>
                        <S.ErrorGif src={error} alt=""/>
                    </figure>
                </S.ImageBox>
                </S.PresentationBox>
                <S.AboutMeBox>
                    <S.CodingBox>
                    <figure>
                    <S.CodingImage src={coding} alt=""/>
                    </figure>
                    <figure>
                    <S.System_Erro_Image src={system_error} alt="" />
                    </figure>
                    </S.CodingBox>
                </S.AboutMeBox>
            </S.Home>
        </S.Fundo>
    )
}