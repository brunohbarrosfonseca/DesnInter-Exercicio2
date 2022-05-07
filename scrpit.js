let quiz = document.querySelector('.quiz')
let boxmensagem = document.querySelector('.boxmensagem')
let resultado = document.querySelector('.resultado')
let fantasma = document.querySelector('.fantasma')
let body = document.querySelector('body')


function checkAnswer(event) {
    quiz.classList.add('inactive')
    let alternative = event.target
    alternative.classList.add('clicked')

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

        body.style.backgroundColor = '#212121'
        
    }

    boxmensagem.style.display = 'inherit'

}

let alternatives = document.querySelectorAll('.imagem')
for (let alternative of alternatives) {
    alternative.addEventListener('click', checkAnswer)
}