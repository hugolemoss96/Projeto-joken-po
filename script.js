const resultado = document.querySelector(".resultado")
const pontuacao = document.querySelector("#pontuacao")
const pontuacaoMaquina = document.querySelector("#pontuacao-maquina")

let scoreHumano = 0
let scoreMaquina = 0

const playHumano = (escolhaHumano) =>{
    jogarJogo(escolhaHumano, playMaquina())
  
}

const playMaquina = ()=>{
    const escolhas = ['pedra', 'papel', 'tesoura']
    const numeroAleatório = Math.floor(Math.random() *3)
    

    return escolhas[numeroAleatório]
}


const jogarJogo = (humano, maquina) =>{
    console.log('Humano: ' + humano + '/' + 'Máquina: ' + maquina)

    if(humano === maquina){
    resultado.innerHTML = "Empatou"

}   else if((humano==='pedra'&& maquina==='tesoura') ||
    (humano==='tesoura'&& maquina=='papel') || (humano==='papel'&& maquina=='pedra')){
        scoreHumano++
        pontuacao.innerHTML = scoreHumano
        resultado.innerHTML = "Você Ganhou!"


}   else{
        scoreMaquina++
        pontuacaoMaquina.innerHTML = scoreMaquina
        resultado.innerHTML = "Você perdeu para a Alexa!"

}


}

