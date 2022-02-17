const settingsModal = document.querySelector('.settings-modal')
const closeBtn = document.querySelector('.close-btn')
const settingsBtn = document.querySelector('.drop-btn')

settingsBtn.addEventListener('click', ()=>{
    settingsModal.style.visibility= 'visible'
})
closeBtn.addEventListener('click', ()=>{
    settingsModal.style.visibility = 'hidden'
})


// document.querySelectorAll('.drop-btn').forEach((el)=> {
    //     el.addEventListener('click', (e) => {
        //         let path = e.currentTarget.getAttribute('data-path');
        
        //         console.log(path)
        //         console.log(e.currentTarget)
        //     })
        //         settingsModal.forEach((el) => { 
            //     el(`[data-target="${path}"]`).style.visibility= 'visible'})
            
            // })
            // closeBtn.addEventListener('click', ()=>{
                //     settingsModal.style.visibility = 'hidden'
                // })
                
 const urlPost = 'https://chat1-341409.oa.r.appspot.com/api/user'
const inputEmail = document.querySelector('.input__value')
const formInput = document.querySelector('.form__autoconf')

const getCode = async () => {
    try {
        const response = await fetch(urlPost, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            email: inputEmail.value
            })
         });
         const data = await response.json();
     
         console.log(data);
       } catch(error) {
           console.log(error)
    } finally {
        inputEmail.form.reset()
    }
     }
    formInput.addEventListener('submit', getCode )