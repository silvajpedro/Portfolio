import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as S from "../Style/style.js"
import Home from "../Home/home.js"
import Work from "../Work/work.js"
import Onu from "../Onu/onu.js"
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
                        <S.Links to="/work">Work</S.Links>
                        </S.LI>
                        <S.LI>
                        <S.Links to="/onu">Onu </S.Links>
                        </S.LI>
                    </S.UL>
                </nav>
            </S.RouteBox>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/onu" element={<Onu/>}/>
            </Routes>
        </BrowserRouter>
    )
}