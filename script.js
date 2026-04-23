// Barra di progresso
function aggiornaBarra() {
    const valore = document.getElementById('progressInput').value;
    const barra = document.getElementById('barra');

    let numero = parseInt(valore);

    if (isNaN(numero) || numero < 0) numero = 0;
    if (numero > 100) numero = 100;

    barra.style.width = numero + '%';
    barra.textContent = numero + '%';
}

// Calcolatrice
function calcola(operazione) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('risCalcolo');

    if (isNaN(n1) || isNaN(n2)) {
        output.textContent = "Inserisci due numeri validi";
        output.style.color = "red";
        return;
    }

    let risultato;

    switch (operazione) {
        case '+': risultato = n1 + n2; break;
        case '-': risultato = n1 - n2; break;
        case '*': risultato = n1 * n2; break;
        case '/': risultato = n2 !== 0 ? n1 / n2 : "Errore: divisione per zero"; break;
    }

    output.textContent = "Risultato: " + risultato;
    output.style.color = "blue";
}
