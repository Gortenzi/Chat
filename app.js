import 'regenerator-runtime/runtime'
// import {getCode, inputEmail, formInput } from "./post.js"
import {UI_REQUEST, getRequest} from "./request.js"
import {settingsModal, closeBtn, btns } from "./modal.js"
import {sendmessagesBtn, renderOtherMessage} from "./template.js"
import Cookies from 'js-cookie'


     
 // POST request
  UI_REQUEST.FORM_INPUT.addEventListener('submit', () =>{
  const body = {
        email: UI_REQUEST.INPUT_EMAIL.value
      }
         getRequest('POST', UI_REQUEST.URL_POST, body)
    })


// PATCH request

UI_REQUEST.FORM_FOR_CODE.addEventListener('submit', () =>{
//   Cookies.set('magic-code', UI_REQUEST.INPUT_CODE.value)
// const token = Cookies.get('magic-code')
const chatName = document.querySelector('.settings-input__name').value
Cookies.set(chatName, UI_REQUEST.INPUT_CODE.value)
const token = Cookies.get(chatName)
const body ={
     name: UI_REQUEST.USER_NAME.value
  }
  getRequest('PATCH', UI_REQUEST.URL_PATCH, body, token)
  })


// GET request


const  chatOther = async () => {
   const chatName = await document.querySelector('.settings-input__name').value
    Cookies.set(chatName, UI_REQUEST.INPUT_CODE.value)
   const token = await Cookies.get(chatName)
   //  return getRequest('GET', UI_REQUEST.URL_GET, null, token).then();
  const responsFromFetch = await getRequest('GET', UI_REQUEST.URL_GET, null, token).then();
  return  renderOtherMessage(responsFromFetch)
  
  } 
  
UI_REQUEST.FORM_FOR_CODE.addEventListener('submit', chatOther)




