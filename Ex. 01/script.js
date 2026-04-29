let numero = parseInt(prompt("Digite um número:"));
let Mensagem = "";

if (isNaN(numero) || numero < 1) {
    alert("Digite um número válido!");
} else {
    for (let contador = 1; contador <= numero; contador++) {
        Mensagem = `${Mensagem} ${contador}`;
    }
    
    alert(Mensagem);

}