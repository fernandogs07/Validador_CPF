console.log("Javascript carregado");

function validaCpf(cpf) {
    // console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digito = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {

            soma += numeros.charAt(10 - i) * i;

        }

        var primeiroDigito = (soma * 10) % 11;
        console.log(primeiroDigito)

        if (primeiroDigito != digito.charAt(0)) {
            return false
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k
        }

        var segundoDigito = (soma * 10) % 11;

        if (segundoDigito != digito.charAt(1)) {
            return false
        }


        return true;
    }
}
    

function validacao() {
    console.log("Iniciando validação cpf!");
    document.getElementById('sucesso').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    var cpf = document.getElementById('cpf').value;
    if (cpf == "") {
        alert("Por favor, digite seu CPF!")
        document.getElementById('cpf').focus();
    } else {

        var resultadoValidacao = validaCpf(cpf);

        if (resultadoValidacao) {
            document.getElementById('sucesso').style.display = 'block';
            document.getElementById('sucesso').style.backgroundColor = '#D4E5C9';
            document.getElementById('sucesso').innerHTML = "Oba! Seu CPF é válido"
        } else {
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = "Ops! Seu CPF é inválido"
            document.getElementById('error').style.backgroundColor = '#EDCDCB';
        }
    }
}



