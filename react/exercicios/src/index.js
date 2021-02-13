import React from "react";
import ReactDom from "react-dom";
// import Primeiro from './componentes/Primeiro';
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

// import BomDia from  './componentes/BomDia'

import Saudacao from "./componentes/Saudacao";

// isso é sintaxe jsx
ReactDom.render(
  <div>
    {/* <Multi.BoaTarde nome="Guilherme" />
    <BoaNoite nome="Gustavo" /> */}
    {/* <Saudacao tipo="Bom dia" nome="João" /> */}
    <Pai nome="Gustavo" sobrenome="Rodrigues">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
      {/* Passando componentes filhos */}
    </Pai>
  </div>,
  document.getElementById("root")
);
