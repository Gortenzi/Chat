// import 'regenerator-runtime/runtime'
import {getCode, inputEmail, formInput } from "./post.js"
import {settingsModal, closeBtn, btns } from "./modal.js"
import {sendmessagesBtn, getTime} from "./template.js"
// import Cookies from 'js-cookie'


const urlPatch = 'https://chat1-341409.oa.r.appspot.com/api/user';
const formForName = document.querySelector('.form__conf')


const setName = async () => {
const userName = document.querySelector('.settings-input__name').value
console.log(userName)
const inputCode =  document.querySelector('.input__code').value
console.log(inputCode)
   Cookies.set('magic-code', 'inputCode' )
   const token = Cookies.get('magic-code')
    try {
        const response = await fetch(urlPatch, {
         method: 'PATCH',
         mode: 'no-cors',
         headers: {
          'Accept': 'aplication/json',
          'Access-Control-Allow-Origin': 'https://chat1-341409.oa.r.appspot.com/api/user',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
           },
           body: {'name' : `${userName}`}});
          
            
         const data = await response.json();
     return JSON.stringify(data);
         console.log(data);
       } catch(error) {
           console.log(error)
    } finally {
      // formForName.form.reset()
    }
     }
     formForName.addEventListener('submit', setName )
    

 
   

  