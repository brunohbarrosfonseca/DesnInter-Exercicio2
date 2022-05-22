let quiz = document.querySelector('.quiz')
let boxmensagem = document.querySelector('.boxmensagem')
let resultado = document.querySelector('.resultado')
let fantasma = document.querySelector('.fantasma')
let body = document.querySelector('body')


function checkAnswer(event) {
    let alternative = event.target

    if (alternative.classList.contains('celular')) {
        resultado.textContent = 'Fantasmas não gostam de selfies. Ele quase desaparece...'
        fantasma.style.opacity = '10%'      
    }

    if (alternative.classList.contains('fantasma')) {
        resultado.textContent = 'Você vai em direção ao fantasma... E ele some!'
        fantasma.style.opacity = '0%' 
    }

    if (alternative.classList.contains('porta')) {
        resultado.textContent = 'Você tenta abrir a porta, mas o fantasma te pega!'
        fantasma.style.width = '100%'
        fantasma.style.opacity = '100%' 
        fantasma.style.alignSelf = 'flex-start'  
    }

    if (alternative.classList.contains('interruptor')) {
        resultado.textContent = 'Você tenta acender a luz... Que está queimada!'
        //troca cor do fundo para amarelo
        body.style.backgroundColor = 'rgb(209, 197, 22)'
        //inicia um contador de 1 seg e muda cor para preto
        setTimeout(()=>{body.style.backgroundColor = 'rgb(1, 1, 1)'
            setTimeout(function (){body.style.backgroundColor = 'rgb(209, 197, 22)'
                setTimeout(function (){body.style.backgroundColor = 'rgb(1, 1, 1)'
                }, 250)
            }, 150)
        }, 450)
    }

    boxmensagem.style.display = 'inherit'
    podeInteragir = false
    setTimeout (()=>{
        podeInteragir = true
    },1000)

}

let podeInteragir = true

function mostrarAcao(event){
    if (podeInteragir){

        let alternative = event.target

        if (alternative.classList.contains('celular')) {
            resultado.textContent = 'Tentar fotografar o fantasma'
        }

        if (alternative.classList.contains('fantasma')) {
            resultado.textContent = 'Tentar lutar com o fantasma'
        }

        if (alternative.classList.contains('porta')) {
            resultado.textContent = 'Fugir pela porta'
        }

        if (alternative.classList.contains('interruptor')) {
            resultado.textContent = 'Acender a luz'
        }
    }

}

function esconderAcao(){
    resultado.textContent = ''
}

let alternatives = document.querySelectorAll('.imagem')
for (let alternative of alternatives) {
    alternative.addEventListener('click', checkAnswer)
    alternative.addEventListener('mouseout', esconderAcao)
    alternative.addEventListener('mouseover', mostrarAcao)
}