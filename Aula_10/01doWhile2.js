//exemplo 01 - While

let resultado = "";
let g = 0;

while (g < 8) {
    g += 1; //g = g+1
    resultado += g; //resultado = resultado + g
    console.log(resultado);
}

//ex02: Do ...While:
// Faça .... Enquanto

let resultado2 = "";
let i = 0;

do {
    //açoes do meu programa
    i = i + 1; //i++
    resultado2 = resultado2 + i;
} while (i < 5);

console.log("Resultado do DO WHILE: " + resultado);

//ex0: 03

let resultado3 = "";
let x = 0;

while (x < 5) {
    resultado3 = resultado3 + x;
    x = x + 1; //i++
}

console.log("Resultado do whie: " + resultado3);

