import React, { useState, useEffect } from "react";
import * as S from "../Style/style.js"
import teste from "../Style/Assets/teste3.gif"
import teste5 from "../Style/Assets/teste5.gif"
export default function Onu(){
    const [fundo, setFundo] = useState(true)
    return(
        <S.Fundo style={fundo === true ? { backgroundImage: `url(${teste})` } : { backgroundImage: `url(${teste5})`, backgroundSize: '40%' }}>
       
        </S.Fundo>
    )
}