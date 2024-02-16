class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = this.definirAtaque();
    }
    
    definirAtaque() {
        if (this.tipo == "mago") {
            return "magia";
        } else if (this.tipo == "guerreiro") {
            return "espada";
        } else if (this.tipo == "monge") {
            return "artes marciais";
        } else {
            return "shuriken";
        }
    }
    escrever() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
    }
}
let heroi = new hero("Henrique", 10, "monge");
heroi.escrever();