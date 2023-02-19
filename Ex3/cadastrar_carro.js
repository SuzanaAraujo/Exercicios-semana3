var listaCarros = [];

//criar a div
var divContainer = document.createElement("div");
divContainer.classList = "container";

//criar ul
var ulCarros = document.createElement("ul");
ulCarros.classList = "carros";

//criar a estrutura de filhos (nós filhos)
divContainer.appendChild(ulCarros);

for (const carroCadastrado of listaCarros) {
  adicionarCarrosNoDOM(listaCarros);
}

var body = document.getElementsByTagName("body")[0];
body.appendChild(divContainer);

console.log(body);

function adicionarVeiculo() {
  const inputCarro = document.getElementsByName("nome")[0];
  console.log(inputCarro.value);

  if (inputCarro.value == "") {
    alert("Este campo não pode ser vazio!");
  } else {
    adicionarCarrosNoDOM(inputCarro.value);
    listaCarros.push(inputCarro.value);
    inputCarro.value = ""; //este comando serve para zerar o input após a inserção
    alert("Veículo cadastrado com sucesso!");
  }
}

function adicionarCarrosNoDOM(nome) {
  var liCarros = document.createElement("li");
  liCarros.classList = "carro";
  liCarros.innerText = nome;
  ulCarros.appendChild(liCarros);
}
