/*const dia = 5; 

switch (dia) {
  case 1:
    console.log("Hoje é segunda-feira.");
    break;
  case 2:
    console.log("Hoje é terça-feira.");
    break;
  case 3:
    console.log("Hoje é quarta-feira.");
    break;
  case 4:
    console.log("Hoje é quinta-feira.");
    break;
  case 5:
    console.log("Hoje é sexta-feira.");
    break;
  case 6:
    console.log("Hoje é sábado.");
    break;
  case 7:
    console.log("Hoje é domingo.");
    break;
  default:
    console.log("Dia inválido.");
}*/

const numero1 = 10;
const numero2 = 5;
const operacao = "+";

switch (operacao) {
  case "+":
    console.log(`Resultado: ${numero1 + numero2}`);
    break;
  case "-":
    console.log(`Resultado: ${numero1 - numero2}`);
    break;
  case "*":
    console.log(`Resultado: ${numero1 * numero2}`);
    break;
  case "/":
    console.log(`Resultado: ${numero1 / numero2}`);
    break;
  default:
    console.log("Operação inválida.");
}