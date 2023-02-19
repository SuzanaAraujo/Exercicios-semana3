var marcasCadastradas = [];
var modelosCadastrados = [];

function cadastrarMarca(nomeMarca) {
  marcasCadastradas.push(nomeMarca);
  console.log("Marca cadstrada com sucesso!");
}
cadastrarMarca("Ford");
cadastrarMarca("Chevrolet");
cadastrarMarca("Volks");

console.log(marcasCadastradas);

function cadastrarModelo(nomeModelo) {
  modelosCadastrados.push(nomeModelo);
  console.log("Modelo cadastrado com sucesso!");
}

cadastrarModelo("Gol");
cadastrarModelo("Fusca");
cadastrarModelo("Kombi");

console.log(modelosCadastrados);
