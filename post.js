export const urlPost = 'https://chat1-341409.oa.r.appspot.com/api/user'
export const inputEmail = document.querySelector('.input__value')
export const formInput = document.querySelector('.form__autoconf')

export const getCode = async () => {
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