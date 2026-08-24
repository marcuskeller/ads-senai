function validaFormulario() {
    if (document.frmcadastro.txtnome.value == "") {
        alert("Preencha o nome!");
        document.frmcadastro.txtnome.focus();
        return false
    } else if (document.frmcadastro.txtfone.value == "") {
        alert("Preencha o telefone!");
        document.frmcadastro.txtfone.focus();
        return false
    } else if (document.frmcadastro.txtemail.value == ""){
        alert("Preencha o email");
        document.frmcadastro.txtemail.focus();
        return false
    } else {
        alert("Formulário enviado com sucesso")
    }

    

}