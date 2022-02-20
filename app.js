import 'regenerator-runtime/runtime'
import {getCode, inputEmail, formInput } from "./post.js"
import {settingsModal, closeBtn, btns } from "./modal.js"
import {sendmessagesBtn} from "./template.js"
import Cookies from 'js-cookie'


const url = 'https://chat1-341409.oa.r.appspot.com/api/user';
const formForName = document.querySelector('.form__conf')
const inputCode =  document.querySelector('.input__code').value
const userName = {
  name: document.querySelector('.settings-input__name').value
}
Cookies.set('magic-code', 'inputCode' )
const token = Cookies.get('magic-code')
   


const setName = async () => {

    try {
        const patchResponse = await fetch(url, {
         method: 'PATCH',
         headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json;charset=UTF-8',
           'Authorization': `Bearer ${token}`,
           },
           body: JSON.stringify(userName),
          
          });

         const data = await patchResponse.json();
         console.log(data);
          // return JSON.stringify(data);
       } catch(error) {
           console.log(error)
    } finally {
      // formForName.form.reset()
    }
     }
     formForName.addEventListener('submit', setName )
    
   
 
   

  