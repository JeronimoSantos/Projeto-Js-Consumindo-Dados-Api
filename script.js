async function buscarEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertido = await consultaCep.json();
    if (consultaCepConvertido.erro) {
        throw Error('CEP não existente!');
    }
    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')

    cidade.value = consultaCepConvertido.localidade;
    logradouro.value = consultaCepConvertido.lagradouro;
    estado.value = consultaCepConvertido.uf;

    console.log(consultaCepConvertido);
    return consultaCepConvertido
    }  catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido tente novamente </P>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscarEndereco(cep.value))

//let ceps = ['01001000','01001001'];
//let conjuntoCep = ceps.map(valores => buscarEndereco(valores));
//Promise.all(conjuntoCep).then(respostas => console.log(respostas));

//.then(resposta => resposta.json())
//.then(r =>{
//    if (r.erro) {
//        throw Error('Esse cep não existe')
//    } else
//   console.log(r)
//})
//.catch(erro => console.log(erro))
//.finally(mensagem => console.log('Processamento Concluido!'));
