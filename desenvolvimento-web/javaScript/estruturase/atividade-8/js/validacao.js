function validaFormulario() {
    let valorCompra = document.getElementById('valorCompra').value;

    let documento = document.querySelector('input[name="rddocumento"]:checked');

    if (valorCompra === "") {
        alert("Preencha o campo valor da compra");
        documento.getElementById('valorCompra').focus();
        return false;
    } else if (documento === null) {
        alert("Preecha o campo cupom de desconto")
        return false
    } else {
        let valorComprav = Number(valorCompra);
        if (valorComprav > 500 || documento.value === "S") {
            alert("Você tem um cupom de desconto")
        } else {
            alert("Você não ganhou nenhum cupom de desconto")
        }
    }

}