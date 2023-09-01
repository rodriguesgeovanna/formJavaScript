let clientes = [
    { nome: "Cliente 1", email: "cliente1@example.com" },
    { nome: "Cliente 2", email: "cliente2@example.com" },
    { nome: "Cliente 3", email: "cliente3@example.com" }
];

function consultar() {
    let output = "Lista de Clientes:\n";
    clientes.forEach(cliente => {
        output += `Nome: ${cliente.nome}, Email: ${cliente.email}\n`;
    });
    alert(output);
}

function deletar() {
    let index = prompt("Digite o índice do cliente que deseja deletar (0, 1, 2, ...):");
    if (index !== null && index !== "") {
        index = parseInt(index);
        if (index >= 0 && index < clientes.length) {
            clientes.splice(index, 1);
            alert("Cliente deletado com sucesso.");
        } else {
            alert("Índice inválido.");
        }
    }
}

function alterar() {
    let index = prompt("Digite o índice do cliente que deseja alterar (0, 1, 2, ...):");
    if (index !== null && index !== "") {
        index = parseInt(index);
        if (index >= 0 && index < clientes.length) {
            let novoNome = prompt("Novo nome do cliente:");
            let novoEmail = prompt("Novo email do cliente:");
            if (novoNome !== null && novoEmail !== null) {
                clientes[index].nome = novoNome;
                clientes[index].email = novoEmail;
                alert("Cliente alterado com sucesso.");
            }
        } else {
            alert("Índice inválido.");
        }
    }
}

function pesquisa(email, senha) {
    if (email == "geehrodrigues154@gmail.com" && senha == "1234") {
        window.open("../assets/cadaste-se.html");
        window.close();
    } else {
        alert("Email ou senha inválido");
        document.querySelector("#email").focus();
    }
}