function validar() {
    let nome = document.getElementById("nome").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let idade = document.getElementById("idade").value;
  
    if (nome == "") {
      alert("Preencha o campo nome");
    } else if (cep == "") {
      alert("Preencha o campo cep");
    } else if (idade == "") {
      alert("Preencha o campo idade");
    } else if (cidade == "") {
      alert("Preencha o campo cidade");
    } else {
      alert("Cadastrado com sucesso! Bem-vindo(a) "+nome+"!")
    }
    document.getElementById("user").innerHTML=nome
  
  }