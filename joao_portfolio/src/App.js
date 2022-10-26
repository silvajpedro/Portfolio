import React from "react";
import Rotas from "./Components/Routes/Rotas.js";
import * as S from "./Components/Style/style.js"
export default function App() {
  return (
    <>
      <section style={{ display: 'flex' }}>
        <S.GlobalStyle />
        <Rotas />
      </section>
    </>
  )
}
