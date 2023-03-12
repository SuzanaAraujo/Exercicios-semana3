
var veiculosCadastrados = [];

function cadastrarVeiculo(nomeMarca, nomeModelo, km, valor, cor) {
  veiculosCadastrados.push({ nomeMarca, nomeModelo, km, valor, cor });
  console.log("Veículo cadastrado com sucesso!");
  return veiculosCadastrados;
}
cadastrarVeiculo("Volks", "Gol", 55000, 70000, "branco");
cadastrarVeiculo("Chevrolet", "Saveiro", 5000, 50000, "cinza");
cadastrarVeiculo("BMW", "X4", 55000, 200000, "azul");

console.log(veiculosCadastrados);
