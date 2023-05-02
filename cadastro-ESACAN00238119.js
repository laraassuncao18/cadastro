verificar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let Date = document.getElementById('nascimento').value;
    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('Telefone').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    let bairro = document.getElementById('bairro').value;
    let rua = document.getElementById('rua').value;
    let number = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let Cidade = document.getElementById('Cidade');
    let Estado = document.getElementById('Estado');

    //

if(!email || !senha || !Date || !nome || !tel || !cpf || !cep || !bairro || !rua || !number || !complemento || !Cidade || !Estado){
    alert("Campo de preenchimento obrigatório");
}
else 
alert ("Campos preenchidos com sucesso!");
}