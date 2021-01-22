// import nanoid from "nano";

// const expiracao = new Date().getTime();
// const id = nanoid(8);
// expiracao.toString(16);

// // console.log(expiracao.toString(16));

// const texto1 = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>";

// console.log(texto1.match(/<(\w+)>.*<\/\1>/g));

// // o número 1 faz referência ao valor que foi capturado no grupo anterior

// const texto2 = "Lentamente é mente muito lenta.";

// console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi));

// console.log(texto2.match(/(?:lenta)(mente).*\1/gi));
// // ?: faz com que o valor do grupo não fique guardado na memória

// console.log(texto2.replace(/(lenta)(mente)/gi, "$2")); // substituir utilizando o retrovisor

// "01/20-03/20;5-6;9;11-12" => ["01/2020", "02/2020", "03/2020", "5", "6", "9", "11", "12"]

const data = '01/20-03/20;5-6;9;11-12';

const ano = data.match(/(\d{2}\/(\d{2}\/)*\d{2,4})/g)

console.log(ano);

