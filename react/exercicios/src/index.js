import React from "react";
import ReactDom from "react-dom";
// import Primeiro from './componentes/Primeiro';

// import BomDia from  './componentes/BomDia'

import Saudacao from "./componentes/Saudacao";

// isso é sintaxe jsx
ReactDom.render(
  <div>
    {/* <Multi.BoaTarde nome="Guilherme" />
    <BoaNoite nome="Gustavo" /> */}
    <Saudacao tipo="Bom dia" nome="João" />
  </div>,
  document.getElementById("root")
);
