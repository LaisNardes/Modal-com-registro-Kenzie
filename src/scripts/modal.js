/* Desenvolva seu código aqui... */
function modalRegister (){
    const catchLink = document.querySelector('.form__register-link')
    const catchModal = document.querySelector('#modalController')

    catchLink.addEventListener('click', () =>{
        catchModal.showModal()

        closingModalButton()
})
}

function closingModalButton (){
    const button = document.querySelector('.toCloseModal')
    const catchModal = document.querySelector('#modalController')

    button.addEventListener('click', () => {
        modalController.close()
})
}

 modalRegister()
