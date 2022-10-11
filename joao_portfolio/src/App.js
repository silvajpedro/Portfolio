import React, { useState, useEffect, useRef } from "react";
import Rotas from "./Components/Routes/Rotas.js";
import * as S from "./Components/Style/style.js"
import { Helmet } from "react-helmet";
export default function App() {
  // const [Word, setWord] = useState('oi eu sou o João ツ')
  // const [textoArray, setTexto] = useState(Word.split(''))
  // console.log(textoArray.length)
  // const [add, setAdd] = useState('')
  // const [i, setI] = useState(0)
  // // const textoArray = setWord(Word.split(""))
  // console.log(textoArray)
  // const Digita = () =>{
  //   setI(i+1)
  //   setTimeout(()=>{
  //     setAdd(add.concat(textoArray[i]))
  //   }, i * 50)
  // }
  // useEffect(() => {
  //   if(i <= 17){
  //     Digita()
  //   }
  //     const digita = (element) =>{
  //       const textoArray = element.innerHTML.split('')
  //       console.log(textoArray)
  //       element.innerHTML = "";
  //       textoArray.forEach((letra, i)=>{
  //         setTimeout(()=>{
  //           element.innerHTML += letra
  //         }, 75 * i)
  //     })
  //   }


  //      const Digita = () =>{
  //       textoArray.forEach((letra, i)=>{
  //         setTimeout(()=>{
  //           setWord(Word.concat(letra))
  //         }, 75 * i)
  //     })
  //   }
  //   if (Word === 'o') {
  //     setTimeout(() => {
  //       setWord(Word.concat('i'))
  //     }, 200)
  //   } else if (Word === "oi") {
  //     setTimeout(() => {
  //       setWord(Word.concat(' e'))
  //     }, 200)
  //   } else if (Word === "oi e") {
  //     setTimeout(() => {
  //       setWord(Word.concat('u'))
  //     }, 200)
  //   } else if (Word === "oi eu") {
  //     setTimeout(() => {
  //       setWord(Word.concat(' s'))
  //     }, 200)
  //   } else if (Word === "oi eu s") {
  //     setTimeout(() => {
  //       setWord(Word.concat('o'))
  //     }, 200)
  //   } else if (Word === "oi eu so") {
  //     setTimeout(() => {
  //       setWord(Word.concat('u'))
  //     }, 200)
  //   } else if (Word === "oi eu sou") {
  //     setTimeout(() => {
  //       setWord(Word.concat(' J'))
  //     }, 200)
  //   } else if (Word === "oi eu sou J") {
  //     setTimeout(() => {
  //       setWord(Word.concat('o'))
  //     }, 200)
  //   } else if (Word === "oi eu sou Jo") {
  //     setTimeout(() => {
  //       setWord(Word.concat('ã'))
  //     }, 200)
  //   } else if (Word === "oi eu sou Joã") {
  //     setTimeout(() => {
  //       setWord(Word.concat('o'))
  //     }, 200)
  //   } else if (Word === "oi eu sou João") {
  //     setTimeout(() => {
  //       document.querySelector('h1').style.color = "blue"
  //     }, 200)
  //   }
  // },[add])
  return (
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Portfólio | João Pedro</title>
      <meta name="description" content="Portfólio João Pedro" />
    </Helmet>
      <section style={{ display: 'flex' }}>
        <S.GlobalStyle />
        {/* <S.BigBox> */}
        {/* <S.Fundo>
    </S.Fundo> */}
        <Rotas />
        {/* <h1>{add}</h1>
      <h2>{i}</h2> */}
        {/* <S.Fundo>
    </S.Fundo> */}
        {/* </S.BigBox> */}
      </section>
    </>
  )
}
