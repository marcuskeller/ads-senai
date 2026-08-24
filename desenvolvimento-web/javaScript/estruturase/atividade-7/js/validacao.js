function validaFormulario() {

    let idade = document.getElementById('idade').value;

    /*
        O que a instrução abaixo faz?
        Procura no formulário qual o botão de rádio está marcado, 
        e guarda este componente na variável documento
        querySelector() - procure o primeiro elemento que atenda à condição informada.
        input - procure um campo de formulário.
        [name="rddocumento"] - dos campos encontrado, quero aqueles cujo name
                               é rddocumento
        checked - quero apenas o que esta marcado.

        Resumindo - procure a página o radio button chamado "rddocumento" que
                    estiver marcado.
    */

   let documento = document.querySelector('input[name="rddocumento"]:checked');

   if(idade === ""){
    alert("Preencha o campo idade");
    documento.getElementById('idade').focus();
    return false;
   }else if(documento === null){
    alert("Preecha o campo documentos com foto")
    return false
   }else {
    let idadev =Number(idade);
    if(idadev >= 16 && documento.value === "S"){
        alert("Entrada permitida")
    }else {
        alert("Entrada não permitida")
    }
   }

}