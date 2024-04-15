//Aqui está como você pode interpretar essa expressão regular:

//^ - Representa o início da string.

//[0-9] -  Representa qualquer dígito numérico de 0 a 9.

//+ - Indica que o dígito pode ocorrer uma ou mais vezes.

//$ - Representa o final da string.

//const regex = /^[A-Za-z]+$/;

//console.log(regex.test("abcd")); // true
//console.log(regex.test("abc123")); // false

// 03 Email //

//const regex = /^[\w-]+(\.[w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//console.log(regex.test("test@exemple.com")); // true
//console.log(regex.test("invalid_email")); // false

//const regex = /\d+/g;
//const string = "Eu tenho 3 maças e 5 laranjas.";
//const numeros = string.match(regex);
//console.log(numeros); // ["3", "5"]

const regex = /^(\+55)?\s?(?:\(?\d{2}\)?\s?)?(?:9\s?)?[6-9]\d{3}\s?-?\d{4}$/

function verificaNumeroCelular(numero){
    return regex.test(numero)
}

const numeroTelefone = prompt("Digite um número de celular no formato brasilerio (ex.9XXXXXXXXX):00")

//Verificar se o número de telefone é válido
const ehValido = verificaNumeroCelular(numeroTelefone);

//Exibir o resultado//
if (ehValido) {
    console.log("O número de celular é válido.");
} else {
    console.log("O número de celular é inválido.");
}
