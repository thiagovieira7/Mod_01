let listaProdutos = [
    { Descrição: "Coca-Cola", Valor: 9.0, Quantidade: 10 },
    { Descrição: "Toddynho", Valor: 3.5, Quantidade: 5 },
    { Descrição: "Doritos", Valor: 2.0, Quantidade: 2 },
];

index = 0;

while (index < listaProdutos.length) {
    console.log(listaProdutos.splice(2, 2));
    index++;
}
