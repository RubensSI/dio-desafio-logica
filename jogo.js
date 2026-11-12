class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {

    if (this.tipo === "mago") {
      this.ataque = "magia";
    }

    if (this.tipo === "guerreiro") {
      this.ataque = "espada";
    }

    if (this.tipo === "monge") {
      this.ataque = "artes marciais";
    }

    if (this.tipo === "ninja") {
      this.ataque = "shuriken";
    }

    console.log(`${this.tipo} atacou usando ${this.ataque}`);
  }
}

const mago = new Heroi("Mago", 25, "mago");
mago.atacar();

const guerreiro = new Heroi("Guerreiro", 30, "guerreiro");
guerreiro.atacar();

const monge = new Heroi("Monge", 35, "monge");
monge.atacar();

const ninja = new Heroi("Ninja", 40, "ninja");
ninja.atacar();