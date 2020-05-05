class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // va hacia el constructor padre y hereda los datos
        super(nombre, saldo);
        // no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida(){
        return `Bienvenido al cajero para Empresas`;
    }
}

const empresa = new Empresa('Empresa1', 1000, 12091092, 'Construccion');

console.log(empresa.imprimirSaldo());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
