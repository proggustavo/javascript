const axios = require("axios");

const baseUrl =
  "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/";

async function consultarCidade(cidade) {
  let response;
  try {
    response = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/biguacu"
    );
    console.log(response);
  } catch (err) {
    console.log("Error", err);
  }
}

consultarCidade("asd");
