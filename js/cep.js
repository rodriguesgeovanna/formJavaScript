//arrow function
const pesquisaCEP = async () => {   //async quer dizer que não é em tempo real
    const cep = document.getElementById('cep').value

    /* PASSANDO O CEP PARA API VIA CEP */
    // USANDO TEMPLATE SCRIPT ``


    // O link original (https://viacep.com.br/ws/01001000/json/) foi editado para o link abaixo:
    const url = `http://viacep.com.br/ws/${cep}/json/`

    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.erro) {
        alert(`CEP ${cep} inválido`);
        document.getElementById('cep').value = "";
        document.getElementById('cep').focus();
    } else {
        preencherFormulario(endereco);
    }
};

/* FUNÇÃO PARA PREENCHER O FORMULÁRIO */

const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

/* CRIANDO UM EVENTO DO INPUT CEP */
document.getElementById('cep') //getElementById quer dizer que pegue o elemento no ID, e informe o ID
    .addEventListener('focusout', pesquisaCEP); // addEventListener quer dizer adicione um evento escutador e informe o elemento que deseja adicionar o evento


/* VERIFICANDO SE O CEP É VÁLIDO */


