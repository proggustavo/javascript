import React from "react";
import { childrenWithProps } from "../utils/utils";

export default (props) => (
  <div>
    <h1>
      {props.nome} {props.sobrenome}
    </h1>
    <h2>Filhos</h2>
    <ul>
      {/* {props.children} */}
      {/* // pra todos os filhos eu vou clonar e chamar um filho // e passar as
      novas propriedades */}
      {childrenWithProps(props)}
    </ul>
  </div>
);
