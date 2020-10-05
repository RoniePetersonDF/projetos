// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    gerarNovoCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.gerarDigito(cpfSemDigitos);
        const digito2 = this.gerarDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos+ digito1 + digito2;
    }

    gerarDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length+ 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    validar() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.gerarNovoCPF();

        return HTMLDListElement.novoCPF === this.cpfLimpo;
    }
}

let validaCPF = new ValidaCPF('070.987.720-03');
console.log(validaCPF.validar());