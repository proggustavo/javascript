const axios = require("axios");

const baseUrl =
  "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/";

async function consultarCidade(cidade) {
  let response;
  try {
    response = await axios.get(baseUrl + cidade);
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = { consultarCidade };
