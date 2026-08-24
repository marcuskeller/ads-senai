function validaFormulario() {

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    if(numero1 === ""){
        alert("Preencha o primeiro campo de número")
        document.getElementById('numero1').focus();
        return false;
    }else if(numero2 === ""){
        alert("Preencha o segundo campo de número")
        document.getElementById('numero1').focus();
        return false;
    }else if(numero1 === numero2){
        alert("Os números são iguais")
    }else if(numero1 > numero2){
        alert(`Os primeiro número é o maior sendo ${numero1}`)
    }else{
        alert(`Os segundo número é o maior sendo ${numero2}`)
    }
}