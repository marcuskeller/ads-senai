function validaFormulario() {

    let numero = parseInt(document.getElementById('numero').value);

    if((numero % 2) === 0 && (numero % 2) === 0){
        alert("Seu número é par e divisível por 3")
    }else {
        alert("Não atende aos critérios")
    }
}