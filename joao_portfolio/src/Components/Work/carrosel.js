import React from "react";
import * as S from "./work_style.js"
export default function Carrosel({children}){
    const Carrosel = {
        width: '75vw',
        height: '80vh',
        cursor: 'pointer',
    }
    const configCarousel = {
        renderBottomCenterControls: false,
        cellAlign: "center",
        slidesToShow: 1,
        style: Carrosel,
        wrapAround: true,
        speed: 900,
        defaultControlsConfig: {
            nextButtonText: '»',
            nextButtonStyle: {
                position: 'relative',
                top: '-4vh',
                right: '3.8vw',
                color: "#00B100",
                fontSize: '140px',
                backgroundColor: 'transparent',
                width: '4.5vw',
                height: '8vh',
            },
            prevButtonText: '«',
            prevButtonStyle: {
                position: 'relative',
                top: '-4vh',
                color: "#00B100",
                fontSize: '140px',
                backgroundColor: 'transparent',
                width: '4.5vw',
                height: '8vh',
            },
        }
    }
    return(
        <>
        <S.Carrosel {...configCarousel} style={Carrosel}>
        {children}
        </S.Carrosel>
        </>
    )
}