// break para quebrar o laço interropendo

let carros = ["BMW", "VOLVO", "SAAB", "FORD"];

list: {
    console.log(carros[0]);
    console.log(carros[1]);
    break list;
    console.log(carros[2]);
    console.log(carros[3]);

}