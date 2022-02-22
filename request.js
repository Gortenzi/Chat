import {renderOtherMessage} from "./template.js"

export const UI_REQUEST = {
    URL_PATCH: 'https://chat1-341409.oa.r.appspot.com/api/user',
    URL_POST:'https://chat1-341409.oa.r.appspot.com/api/user',
    URL_GET:'https://chat1-341409.oa.r.appspot.com/api/messages/',
    FORM_FOR_NAME:document.querySelector('.settings-input'),
    FORM_FOR_CODE:document.querySelector('.form__conf'),
    FORM_INPUT: document.querySelector('.form__autoconf'),
    USER_NAME: document.querySelector('.settings-input__name'),
    INPUT_CODE: document.querySelector('.input__code'),
    INPUT_EMAIL: document.querySelector('.input__value'),
    
}


export const getRequest = async (method, url, body = null, token = null) => {
      const headers = {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    if(method == 'GET') {
      
        try {
            const response = await fetch( url, {
            method: method,
            headers: headers,
            body: null,
            })
           
           const data = await response.json();
         renderOtherMessage(data);
            console.log(data);
            //  return data;
        }catch(error) {
            console.log(error)
        }finally {
            UI_REQUEST.INPUT_CODE.form.reset()
            UI_REQUEST.INPUT_EMAIL.form.reset()
    
        }
    
    }else { 
  
    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        })
        const data = await response.json();
        console.log(JSON.stringify(data));
        return data;
    }catch(error) {
        console.log(error)
    }finally {
        UI_REQUEST.INPUT_CODE.form.reset()
        UI_REQUEST.INPUT_EMAIL.form.reset()

    }
}
   
};


