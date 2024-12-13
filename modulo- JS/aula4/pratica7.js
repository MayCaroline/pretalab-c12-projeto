/*Prática 7: operadores lógicos. Você é a segurança de uma festa e só permite a entrada de pessoas que:
- têm mais de 18 anos E
- estão vestindo roupas formais OU têm o convite VIP

Crie 3 variaveis: idade, roupaFormal (booleano) e temConviteVIP (booleano) e use operadores lógicos para determinar se a pessoa pode entrar ou não.*/
// && - e
// || - ou
// ! = não

const idade = 23
let roupaFormal = false
let temConviteVip =  true

const pessoaPodeEntrar = idade >= 18 && (roupaFormal || temConviteVip);
console.log(`Pode entrar na festa: ${pessoaPodeEntrar}`)