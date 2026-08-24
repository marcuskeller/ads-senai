function validaFormulario() {

    let numero = document.getElementById('numero').value;
    if (numero === "") {

        alert("Preencha o campo número!");
        return false;
    } else {
        let numerov = Number(numero);
        if ((numerov % 2) === 0) {
            alert("O seu número é " + numerov + " ele é par");
        } else {
            alert(`O seu número é ${numerov} ele é ímpar`)
        }
    }

    return true;
}