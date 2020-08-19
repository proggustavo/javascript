import nanoid from "nano";

const expiracao = new Date().getTime();
const id = nanoid(8);
expiracao.toString(16);

console.log(expiracao.toString(16));
