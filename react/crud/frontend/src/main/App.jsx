import "./App.css";
import React from "react";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Main
      icon="home"
      title="Início"
      subtitle="Segundo Projeto capitulo de React."
    />
    <Footer />
  </div>
);
