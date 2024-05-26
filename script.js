'use strict'

const message = document.querySelector('#message')
const query = document.querySelectorAll('.query-type');
const pop_ups = document.querySelectorAll('.pop_up');
const submitBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

let condition = function(){
    pop_ups.forEach(pop_up => {
    (pop_up.classList.contains('hidden'))
})
}

let checkForm = function(){
    inputs.forEach(input => {
        if (!(input.value || input.checked || message.value)){
            document.querySelector(`.${input.name}_pop_up`).classList.remove('hidden');
            document.querySelector(`#${input.id}`).classList.add('error');
            return
    }})
    if(!(message.value)){
        document.querySelector(`#${message.id}`).classList.add('error');
        document.querySelector(`.${message.id}_pop_up`).classList.remove('hidden');
    }
    if(!(query[0].checked || query[1].checked)) {
        document.querySelector('.query_pop_up').classList.remove('hidden')
        return
    }
}
// checkForm()
const validateForm = function(){
    checkForm(); 
    condition();
    if(!condition() == true){
        // console.log('done')
        document.querySelector('.success').classList.remove('hidden')
        inputs.forEach(input => {
            input.value = ''
            input.checked = ''
        })
    } return        
}

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    validateForm()
})






