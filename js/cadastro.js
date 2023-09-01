function cadastro(){

     
    let email = document.getElementById('email').value
    let senha = document.getElementById('password').value


    if(email =="" || senha == ""){
        alert('Obrigatório o preenchimento do e-mail e senha')

        document.getElementById('email').focus()
    } else{
        //alert("Poxa preencheu sinto orgulho de você")
        pesquisa(email, senha);
    };
    window.open("../assets/formularioCliente.html");
    window.close();
};

