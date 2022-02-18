import {getCode, inputEmail, formInput } from './post.js'
import {settingsModal, closeBtn, btns } from './modal.js'


const urlPatch = 'https://chat1-341409.oa.r.appspot.com/api/user'
const inputCode = document.querySelector('.input__code')
const token = Cookies.set(inputCode)

 const setName = async () => {
    try {
        const response = await fetch(urlPatch, {
         method: 'PATH',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
           },
           body: ({
           name:'TaniaGor'
            })
         });
         const data = await response.json();
     
         console.log(data);
       } catch(error) {
           console.log(error)
    } finally {
        inputCode.form.reset()
    }
     }
    // formInput.addEventListener('submit', installName )