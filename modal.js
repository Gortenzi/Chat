export const settingsModal = document.querySelectorAll('.settings-modal')
export const closeBtn = document.querySelectorAll('.close-btn')
export const btns = document.querySelectorAll('.drop-btn') 

btns.forEach((el)=> {
        el.addEventListener('click', (e) => {
                let path = e.currentTarget.getAttribute('data-path')
        
                settingsModal.forEach((el) => {
                    el.classList.remove('active');
            })
                settingsModal.forEach((el) => { 
             document.querySelector(`[data-target="${path}"]`).classList.add('active')})
            
            })
        });
       
         closeBtn.forEach((el) =>{
       el.addEventListener('click', ()=> {
        settingsModal.forEach((el) => {
            el.classList.remove('active')
          
        })
        }) 
    })
