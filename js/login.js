function verifica(){

     
    let email = document.getElementById('email').value
    let senha = document.getElementById('password').value


    if(email =="" || senha == ""){
        alert('Obrigatório o preenchimento do e-mail e senha')

        document.getElementById('email').focus()
    } else{
        //alert("Poxa preencheu sinto orgulho de você")
        pesquisa(email, senha);
    };
};

function pesquisa(email, senha) {
    if (email == "geehrodrigues154@gmail.com" && senha == "1234"){

    window.open("../assets/form.html");
    window.close();
} else{
    alert("Email ou senha inválido");
    document.querySelector("#email").focus()
}

}