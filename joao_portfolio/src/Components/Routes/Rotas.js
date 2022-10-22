import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as S from "./routes_style.js"
import Home from "../Home/home.js"
import Work from "../Work/work.js"
import About from "../About/about.js";
import logo from "../Style/Assets/logo3.png"
export default function Rotas(){
    return (
        <BrowserRouter>
            <S.RouteBox>
                <nav>
                    <S.UL>
                        <img src={logo} alt="" />
                        <S.LI>
                           <S.Links to="/">Home</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/about">About</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/work">Work</S.Links>
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