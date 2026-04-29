let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));
let mensagem = "";

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Digite números válidos!");
} else {
    
    let inicio = numero1;
    let fim = numero2;

    if (numero1 > numero2) {
        inicio = numero2;
        fim = numero1;
    }

    for (let contador = inicio; contador <= fim; contador++) {
        if (contador % 2 === 0) {
            mensagem = `${mensagem}${contador} `;
        }
    }

    alert(mensagem);
}