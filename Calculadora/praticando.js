const input = document.querySelector('input');
const numeros = document.querySelectorAll('.numero');
const funcoes = document.querySelectorAll('.btn');
const section = document.querySelector('section');

function num1() {
    this.num1 = '';
}

function num2() {
    this.num2 = '';
}

let numero1 = new num1
let numero2 = new num2


function digit(number1) {
    numeros.forEach((item) => {
        item.addEventListener('click', (el) => {
            number1.num1 += el.target.value
            input.value = numero1.num1
            console.log(+numero1.num1)
        })
    })
}
digit(numero1)

function digit2(number2) {
    numeros.forEach((i) => {
        i.addEventListener('click', (el) => {
            number2.num2 += el.target.value
            input.value = numero2.num2
            console.log(+numero2.num2)
        })
    })
}

let lista = '';
function operacaoSoma() {
    funcoes.forEach((i) => {
        i.addEventListener('click', (el) => {
            console.log(lista)
            lista += el.target.value
            if (el.target.value == '+') {
                digit2(numero2)
            }
            if (el.target.value == '=') {
                let provisorio = numero1.num1.slice(0, -numero2.num2.length)
                if (lista.includes('+'))
                    adicao(+provisorio, +numero2.num2)
                console.log(provisorio)
            }
        })
    })
}
operacaoSoma()

function operacaoSubtracao() {
    funcoes.forEach((i) => {
        i.addEventListener('click', (el) => {
            console.log(lista)
            lista += el.target.value
            if (el.target.value == '-') {
                digit2(numero2)
            }
            if (el.target.value == '=') {
                let provisorio = numero1.num1.slice(0, -numero2.num2.length)
                if (lista.includes('-'))
                    subtracao(+provisorio, +numero2.num2)
            }
        })
    })
}
operacaoSubtracao()

function operacaoDivisao() {
    funcoes.forEach((i) => {
        i.addEventListener('click', (el) => {
            console.log(lista)
            lista += el.target.value
            if (el.target.value == '/') {
                digit2(numero2)
            }
            if (el.target.value == '=') {
                let provisorio = numero1.num1.slice(0, -numero2.num2.length)
                if (lista.includes('/'))
                    divisao(provisorio, +numero2.num2)
            }
        })
    })
}

operacaoDivisao()

function operacaoMultiplicacao() {
    funcoes.forEach((i) => {
        i.addEventListener('click', (el) => {
            console.log(lista)
            lista += el.target.value
            if (el.target.value == '*') {
                digit2(numero2)
            }
            if (el.target.value == '=') {
                let provisorio = numero1.num1.slice(0, -numero2.num2.length)
                if (lista.includes('*'))
                    multiplicacao(+provisorio, +numero2.num2)
            }
        })
    })
}
operacaoMultiplicacao()

function apagar() {
    funcoes.forEach((i) => {
        i.addEventListener('click', (el) => {
            if (el.target.value == 'C' || el.target.value == 'CE') {
                location.reload()
            }

        })
    })
}
apagar()

const adicao = (number1, number2) => {
    let resultado = 0;
    resultado = number1 + number2
    input.value = resultado
    console.log(resultado)
}

const subtracao = (number1, number2) => {
    let resultado = 0;
    resultado = number1 - number2
    input.value = resultado
    console.log(resultado)
}
const divisao = (number1, number2) => {
    let resultado = 0;
    resultado = number1 / number2
    input.value = resultado
    console.log(resultado)
}

const multiplicacao = (number1, number2) => {
    let resultado = 0;
    resultado = number1 * number2
    input.value = resultado
    console.log(resultado)
}
