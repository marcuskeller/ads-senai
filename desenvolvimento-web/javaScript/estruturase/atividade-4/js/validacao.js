function validaFormulario() {

    let primeiraNota = parseInt(document.getElementById('primeiraNota').value);
    let segundaNota = parseInt(document.getElementById('segundaNota').value);
    let terceiraNota = parseInt(document.getElementById('terceiraNota').value);

    let media = (primeiraNota + segundaNota + terceiraNota) / 3;

    if (primeiraNota === "" || segundaNota === "" || terceiraNota === "") {

        alert("Preencha todos os campos de nota!");
        return false;
    } else {
        if (media >= 7) {
            alert(`Você esta aprovado! Com uma média de  ${media}`);
        } else if(media >= 5 && media < 7){
            alert(`Você esta em recuperação! Com uma média de  ${media}`)
        } else {
            alert(`Você esta reprovado! Com uma média de  ${media}`)
        }
    }

    return true;
}