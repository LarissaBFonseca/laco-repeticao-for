let soma = 0;

for (let contador = 1; contador <= 10; contador++) {
    let numero = parseInt(prompt(`Digite o ${contador}º número:`));
    
    if (isNaN(numero)) {
        alert("Digite um número válido!");
        contador--;
    } else {
        soma += numero;
    }
}

alert(`A soma dos números é: ${soma}`)