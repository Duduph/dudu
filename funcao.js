function Calcular() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let operacao = document.getElementById("operacao").value
    let resultado = document.getElementById("resultado")
    let Calculo

    switch(operacao){
        case "+": Calculo = num2+num2; break
        case "-": Calculo = num2-num2; break
        case "*": Calculo = num2*num2; break
        case "/": Calculo = num2/num2; break

    }

    resultado.innerHTML = 

}