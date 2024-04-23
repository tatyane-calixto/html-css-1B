function calcular() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operador = document.getElementById("operador").value;
    let resultado = 0;

    if ((num1 == '') || (num2 == '')) {
        alert("Digite os números para realizar as operações!")
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            alert("Resultado é " + resultado);
            break;
        case "-":
            resultado = num1 - num2;
            alert("Resultado é " + resultado);
            break;
        case "*":
            resultado = num1 * num2;
            alert("Resultado é " + resultado);
            break;
        case "/":
            if(num2!=0){
                resultado = num1/num2;
                alert("Resultado é " + resultado);
                return;
            } else{
                alert("Erro: número não pode ser dividido por zero!");
                return;
            }
                        
            break;
        default:
            alert("Operador Inválido!");
            break;

    }
    limparCampo();

}

function limparCampo(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}