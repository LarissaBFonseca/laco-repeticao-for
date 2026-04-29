let numero = parseInt(prompt("Digite um número para a tabuada:"));
let mensagem = "";

if (isNaN(numero)) {
    alert("Digite um número válido!");
} else { 
    for (let contador = 1; contador <= 10; contador++) {
        mensagem = `${mensagem}${numero} x ${contador} = ${numero * contador}\n`
    }

    alert(mensagem);

}