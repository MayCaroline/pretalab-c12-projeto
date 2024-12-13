/*Declare a variável 'idade', atribua um valor. Faça que programa exiba uma mensagem dizendo se o usuário é uma criança, um adolescente, um adulto, um idoso ou se a idade é invalida.*/

/*12 - crianca
ate 18- adolescente
18-60 - idoso*/

let idade = 10

switch (true){
    case idade <= 12:
        console.log("Voçê é uma criança");
        break;
    
    default:
        console.log("Número desconhecido.")
}