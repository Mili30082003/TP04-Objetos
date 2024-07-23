class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
    }

    extraer(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            alert("Saldo insuficiente");
        }
    }

    informar() {
        return `Titular: ${this.titular}, Saldo: ${this.saldo}<br>`;
    }
}

let cuenta = new Cuenta("Alex", 0);


document.write(cuenta.informar());


cuenta.ingresar(1000);
document.write(cuenta.informar());


cuenta.extraer(500);
document.write(cuenta.informar());
