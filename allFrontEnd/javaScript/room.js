let modal = {
    active(){
        document.querySelector('.modalOverlay').classList.remove('disable')
    },
    disable(){
        document.querySelector('.modalOverlay').classList.add('disable')
    },
}
let Card = {
    insertInCommunityQuestions(question){
        let card =  Card.createCard(question)
        window.document.querySelector('#communityQuestions').appendChild(card)
    },

    createCard(question){
        let card = window.document.createElement('div')

        card.classList.add('card')

        card.innerHTML = Card.cardContent(question)
        
    
        return card 

    },
    cardContent(question){
        let html =
         `
    <div class="usser">

         <img src="/imagens/user.svg" alt="foto de um usuário">
         <span>${question}</span>

     </div>

     <div class="actions">

         <div class="check">
             <a href="">
                 <img src="/imagens/check.svg" alt="marcar como lida"><span>Marcar como lida</span>
             </a>
         </div>

         <div id="trash" onclick="modal.active()">
             <a href="#">
                 <img src="/imagens/trash.svg" alt="excluir mensagem"> <span>Excluir</span>
             </a>
         </div>

     </div>
                  `
         return html
    },
    markLikeRead(index){
        
    }
}

let newQuestion = {
    question: document.getElementById('question'),

    getValues(){
        let question = newQuestion.question.value
        return question
    },
    
    checkQuestion(){
       let question =  newQuestion.getValues()
       if(question.trim() === ''){
            throw new Error ('você  não escreveu nada ')
       }
    },

    submit(event){
        try {
            newQuestion.checkQuestion()
        } catch (error) {
            alert(error.message)
            
        }
        let question = newQuestion.getValues()
        Card.insertInCommunityQuestions(question)
        }
        
    
}
