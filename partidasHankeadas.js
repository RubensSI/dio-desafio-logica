const heroi = "Arthur";
let votorias;
let derrotas;
let nivel = "";
let saldoVitorias;

function calcularPartida(votorias, derrotas) {
  saldoVitorias = votorias - derrotas;
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
  console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
}


