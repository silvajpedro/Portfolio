import React,{useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as S from "./routes_style.js"
import Home from "../Home/home.js"
import Work from "../Work/work.js"
import About from "../About/about.js";
import logo from "../Style/Assets/logo3.svg"

export default function Rotas(){
    const [inicio, setInicio] = useState(false);
    const [sobre, setSobre] = useState(false)
    const [projetos,setProjetos] = useState(false)
    return (
        <BrowserRouter>
            <S.RouteBox>
                <nav>
                    <S.UL>
                        <img src={logo} alt="imagem logo" />
                        <S.LI>
                           <S.Links to="/" isOn={inicio} onClick={()=>{
                            setInicio(true) 
                            setSobre(false)
                            setProjetos(false)}}>Início</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/about" onClick={()=>{
                            setInicio(false) 
                            setSobre(true)
                            setProjetos(false)}} isOn={sobre} >Sobre</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/work" onClick={()=>{
                            setInicio(false) 
                            setSobre(false)
                            setProjetos(true)}} isOn={projetos} >Projetos</S.Links>
                        </S.LI>
                    </S.UL>
                </nav>
            </S.RouteBox>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/work" element={<Work/>}/>
            </Routes>
        </BrowserRouter>
    )
}