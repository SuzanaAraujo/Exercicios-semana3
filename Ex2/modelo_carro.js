var listaModelos = ["Polo", "Gol", "Celta"];

//criar a div
var divContainer = document.createElement("div");
divContainer.classList = "container";

//criar ul
var ulModelos = document.createElement("ul");
ulModelos.classList = "modelos";

//criar a estrutura de filhos (nós filhos)
divContainer.appendChild(ulModelos);

for (const nomeModelo of listaModelos) {
  adicionarModelosNoDOM(nomeModelo);
}

var body = document.getElementsByTagName("body")[0];
body.appendChild(divContainer);

console.log(body);

function adicionarModelo() {
  const inputModelo = document.getElementsByName("nome")[0];
  console.log(inputModelo.value);

  if (inputModelo.value == "") {
    alert("Este campo não pode ser vazio!");
  } else {
    adicionarModelosNoDOM(inputModelo.value);
    listaModelos.push(inputModelo.value);
    inputModelo.value = ""; //este comando serve para zerar o input após a inserção
    alert("Modelo cadastrado com sucesso!");
  }
}

function adicionarModelosNoDOM(nome) {
  var liModelos = document.createElement("li");
  liModelos.classList = "modelo";
  liModelos.innerText = nome;
  ulModelos.appendChild(liModelos);
}
