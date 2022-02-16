const settingsModal = document.querySelector('.settings-modal')
const closeBtn = document.querySelector('.settings-close')
const settingsBtn = document.querySelector('.settings-btn')

settingsBtn.addEventListener('click', ()=>{
    settingsModal.style.display = 'block'
})
closeBtn.addEventListener('click', ()=>{
    settingsModal.style.display = 'none'
})