class Conta {
  constructor(senha) {
    this.saldo = 0;
    this._senha = senha;
  }

  deposito(valor, senha) {
    if (this._senha !== senha) {
      throw new Error("Senha inválida");
    }
    this.saldo += valor;
  }

  retirada(valor) {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente");
    }
    this.saldo -= valor;
  }
}

const contaCorrente = new Conta("minhasenha");
console.log(contaCorrente.saldo); // 0

contaCorrente.deposito(100, "minhasenha");
console.log(contaCorrente.saldo); // 100

contaCorrente.retirada(50);
console.log(contaCorrente.saldo); // 50