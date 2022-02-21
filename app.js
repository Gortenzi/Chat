// import 'regenerator-runtime/runtime'
// import {getCode, inputEmail, formInput } from "./post.js"
import {UI_REQUEST, getRequest} from "./request.js"
import {settingsModal, closeBtn, btns } from "./modal.js"
import {sendmessagesBtn} from "./template.js"
// import Cookies from 'js-cookie'



// const formForName = document.querySelector('.form__conf')

  
// const setName = async () => {
// const urlPatch = 'https://chat1-341409.oa.r.appspot.com/api/user';
// const inputCode =  document.querySelector('.input__code')
// const userName = document.querySelector('.settings-input__name').value
// Cookies.set('magic-code', inputCode.value)
// const token = Cookies.get('magic-code')
//   console.log(userName)
//   console.log(token)
//    try {
//         const patchResponse = await fetch(urlPatch, {
//          method: 'PATCH',
//          body: JSON.stringify({'name':userName.value}),
//          headers: {
//            'Accept': 'aplication/json',
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${token}`,
//            },
          
//           })
//          const data = await patchResponse.json();
//          console.log(JSON.stringify(data));
//      } catch(error) {
//            console.log(error)
//     } finally {
//       inputCode.form.reset()
     
//     }
//      }
//      formForName.addEventListener('submit', setName )
    
   
    //  Cookies.set('magic-code', inputCode.value)
    //  const token = Cookies.get('magic-code')
     
 
 
  UI_REQUEST.FORM_INPUT.addEventListener('submit', () =>{
      const body = {
        email: UI_REQUEST.INPUT_EMAIL.value
      }
  //  getRequest(METHOD.POST, UI_REQUEST.URL_POST, body)
   getRequest('POST', UI_REQUEST.URL_POST, body)
    })


    // UI_REQUEST_FORM_FOR_NAME.addEventListener('submit', setName )

