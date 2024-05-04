function generateFibonacci() {
    const termsInput = document.getElementById('termsInput');
    const outputDiv = document.getElementById('output');
    const terms = parseInt(termsInput.value);

    outputDiv.innerHTML = '';

    if (isNaN(terms) || terms <= 0 || terms >= 100) {
        outputDiv.innerHTML = 'Input must be between 1 and 99.';
        return;
    }

    let fibSequence = '';
    let a = 0, b = 1;

    for (let i = 1; i <= terms; i++) {
        fibSequence += a + ' ';
        const next = a + b;
        a = b;
        b = next;
    }

    outputDiv.innerHTML = 'Fibonacci Sequence: ' + fibSequence;
}

