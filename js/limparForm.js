function limpa() {

    document.getElementById('nome').value = '';    
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('email').value = '';   
    document.getElementById('nome').focus();
    }
    
    document.getElementById('button').addEventListener('click', limpa)
    