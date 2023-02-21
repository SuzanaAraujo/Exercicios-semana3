var marcasCadastradas = [];

function cadastrarMarca(nomeMarca) {
  marcasCadastradas.push(nomeMarca);
  console.log("Marca cadstrada com sucesso!");
}
cadastrarMarca("Ford");
cadastrarMarca("Chevrolet");
cadastrarMarca("Volks");

console.log(marcasCadastradas);
