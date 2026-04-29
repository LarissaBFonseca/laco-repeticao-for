let soma = 0;

for (let contador = 1; contador <= 5; contador++) {
    let nota = parseFloat(prompt(`Digite a ${contador}ª nota:`));

    if (isNaN(nota)) {
        alert("Digite uma nota válida!");
        contador--;
    } else {
        soma += nota;
    }
}

let media = soma / 5;

alert(`A média das notas é: ${media}`);