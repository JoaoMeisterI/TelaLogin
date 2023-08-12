function verificar(){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var cidade = document.getElementById("cidade")
    var bairro = document.getElementById("bairro")
    var rua = document.getElementById("rua")
    var numero = Number(document.getElementById("numero"))
    var res = document.getElementById("res")
    if(nome.value == ''){
        alert("Campo Nome obrigatório")
        nome.style.boxShadow = '1px 1px 5px red'
    }else if(email.value == ''){
        alert("Campo Email obrigatório")
        email.style.boxShadow = '1px 1px 5px red'
    }else if(cidade.value == ''){
        alert("Campo Cidade obrigatório")
        cidade.style.boxShadow = '1px 1px 5px red'
    }else if(bairro.value == ''){
        alert("Campo Bairro obrigatório")
        bairro.style.boxShadow = '1px 1px 5px red'
    }else if(rua.value == ''){
        alert("Campo Rua obrigatório")
        rua.style.boxShadow = '1px 1px 5px red'
    }else if(numero.value == ''){
        alert("Campo Numero obrigatório")
        numero.style.boxShadow = '1px 1px 5px red'
    }else{
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var cidade = document.getElementById("cidade").value
        var bairro = document.getElementById("bairro").value
        var rua = document.getElementById("rua").value
        var numero = document.getElementById("numero").value
        var cadastro = {nome: nome, email: email, cidade: cidade, bairro: bairro, rua:rua, numero:numero}
        alert(`Cadastro concluido com sucesso, Boas vindas ${cadastro.nome}`) 
    }
}
