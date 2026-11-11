let vitorias;
let derrotas;
let nivel = "";
let saldoVitorias;

function calcularPartida(vitorias, derrotas) {
  saldoVitorias = vitorias - derrotas;
  if (saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }
  return { nivel: nivel, saldoVitorias: saldoVitorias };
}

const herois = [
  { vitorias: 10, derrotas: 5 },
  { vitorias: 25, derrotas: 0 },
  { vitorias: 150, derrotas: 20 }
]

let resultados = []

herois.forEach(({ vitorias, derrotas }) => {
  let resultado = calcularPartida(vitorias, derrotas)
  resultados.push(resultado)
})

resultados.forEach(({ nivel, saldoVitorias }) => {
  console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`);

})



