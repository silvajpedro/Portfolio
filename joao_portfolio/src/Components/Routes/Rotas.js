import React,{useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as S from "./routes_style.js"
import Home from "../Home/home.js"
import Work from "../Work/work.js"
import About from "../About/about.js";
import logo from "../Style/Assets/logo3.png"

export default function Rotas(){
    const [inicio, setInicio] = useState(false);
    const [sobre, setSobre] = useState(false)
    const [projetos,setProjetos] = useState(false)
    return (
        <BrowserRouter>
            <S.RouteBox>
                <nav>
                    <S.UL>
                        <img src={logo} alt="imagem logo" loading="lazy" />
                        <S.LI>
                           <S.Links to="/" onClick={()=>{
                            setInicio(true) 
                            setSobre(false)
                            setProjetos(false)}} style={!inicio ? {color:"#fff"}:{color:"#00b100"}}>Início</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/about" onClick={()=>{
                            setInicio(false) 
                            setSobre(true)
                            setProjetos(false)}} style={!sobre ? {color:"#fff"}:{color:"#00b100"}}>Sobre</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/work" onClick={()=>{
                            setInicio(false) 
                            setSobre(false)
                            setProjetos(true)}} style={!projetos ? {color:"#fff"}:{color:"#00b100"}}>Projetos</S.Links>
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