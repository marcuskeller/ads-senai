function validaFormulario() {

    let idade = document.getElementById('idade').value;
    console.log(idade)

    if (idade === "") {

        alert("Preencha o campo idade!");
        return false;
    } else {
        let idadev=parseInt(idade);
        if(idadev>=18){
            alert("Sua idade é " + idadev + " você é maior de idade");
        }else{
            alert(`Sua iade é ${idadev} você é menor de idade`)
        }
    }

    return true;
}