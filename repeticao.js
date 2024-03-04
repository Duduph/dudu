let tentativas = 0
let tabuada = ""
for (let i = 0; i <= 10; i++){
    tabuada += "<p>2x" + i + "=" + (2 * i) + "<p>"
}
document.getElementById("tabuada").innerHTML = tabuada

function advinhacao(){
    let sugestaonumero = parseInt(document.getElementById("numero").value)
    let numero = 5
    let aviso = document.getElementById("aviso")
    let sugestao = document.getElementById("sugestao")

    while (sugestaonumero !== numero){
        aviso.innerHTML = "tentativas" + (tentativas++) + 
        "<p>numero errado! tente denovo.<p>"

        if(numero>sugestaonumero){
            sugestao.innerHTML = "o número é maior!"
        }
        else{
            sugestao.innerHTML = "o número é menor!"
        }
        sugestaonumero.value =""
        return
    }
    sugestao.innerHTML = ""
    aviso.innerHTML = "parabéns!! você acertou em"+ tentativas + "tentativas!!"

}

    function contDecrecente(){
        let numDigitado = parseInt(document.getElementById(numDigitado).value)
        let contagem = document.getElementById("contagem")
        contagem.innerHTML=""

        while(numDigitado>0){
            contagem.innerHTML += "<p>"+(numDigitado--)+"<p>"
        }
    }

