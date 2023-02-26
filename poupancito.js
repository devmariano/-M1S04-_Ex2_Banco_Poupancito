//EX2
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
console.log("TESTANDO CLASSE CONTA EX2")
const contaCorrente = new Conta("minhasenha");
console.log(contaCorrente.saldo); // 0

contaCorrente.deposito(100, "minhasenha");
console.log(contaCorrente.saldo); // 100

contaCorrente.retirada(50);
console.log(contaCorrente.saldo); // 50


//EX3
class ContaPoupanca extends Conta {
    atualizaJuros() {
      const taxaJuros = 0.007; // taxa de juros de 0.7%
      this.saldo += this.saldo * taxaJuros;
    }
  }

console.log("TESTANDO CLASSE CONTA POUPANÇA EX3")

const contaPoupanca = new ContaPoupanca("minhasenha");
console.log(contaPoupanca.saldo); // 0

contaPoupanca.deposito(1000, "minhasenha");
console.log(contaPoupanca.saldo); // 1000

contaPoupanca.atualizaJuros();
console.log(contaPoupanca.saldo); // 1007

contaPoupanca.retirada(500);
console.log(contaPoupanca.saldo); // 507

contaPoupanca.atualizaJuros();
console.log(contaPoupanca.saldo); // 510.049