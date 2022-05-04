let quiz = document.querySelector('.quiz')
let resposta1 = document.querySelector('.resposta1')
let resposta2 = document.querySelector('.resposta2')
let resposta3 = document.querySelector('.resposta3')
let resposta4 = document.querySelector('.resposta4')

function checkAnswer(event){
    quiz.classList.add('inactive')
    let opcao = event.target
    opcao.classList.add('clicked')

    if (opcao.classList.contains ('escolha1')){
        resposta1.style.display = 'initial'
    }
    
    if (opcao.classList.contains ('escolha2')){
        resposta2.style.display = 'initial'
    
    }

    if (opcao.classList.contains ('escolha3')){
        resposta3.style.display = 'initial'
    
    }

    if (opcao.classList.contains ('escolha4')){
        resposta4.style.display = 'initial'
    
    }

}

let opcoes = document.querySelectorAll('li')
for (let opcao of opcoes){
    opcao.addEventListener('click',checkAnswer)
}