import React, { Component } from "react";

export default class Saudacao extends Component {
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome,
  };

  constructor(props) {
    super(props);
    this.setTipo = this.setTipo.bind(this);
    // this.setNome = this.setNome.bind(this);
    // como o this pode variar, é preciso utilizar o bind dentro do construtor para indicar o this
    // já que aqui o this é uma instancia de saudacao
  }

  setTipo(e) {
    this.setState({
      tipo: e.target.value,
    });
  }

  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  // os valores que vem como parametro do this.props não podem ser alterados
  // para alterar você utiliza o state
  render() {
    const { tipo, nome } = this.state;
    return (
      <div>
        <h1>
          {tipo} {nome}{" "}
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={this.setTipo}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(e) => this.setNome(e)}
          //outra opção para chamar a função é com uma função arrow
        />
      </div>
    );
  }
}
