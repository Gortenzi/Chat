export const sendmessagesBtn = document.querySelector('.sendmessages-btn')

export function sendMyMessage(){

  const message = document.querySelector('.message-input').value;
  const chat = document.querySelector('.middle-chat');
  const templ = document.querySelector('#templ');
  const txt = templ.content.querySelector('.message-text__my>span');
  const time = templ.content.querySelector('.message-time__my')
  txt.textContent = (`I: ${message}`);
  time.textContent = getTime();
  let elem = templ.content.cloneNode(true);
  
  chat.append(elem);
  document.querySelector('.inp').form.reset()
  chat.scrollTo(chat.scrollTop, chat.scrollHeight);
  
}

sendmessagesBtn.addEventListener('click', (e) => {
  if(document.querySelector('.message-input').value =='') return;
else if(e.code ==="Enter") sendMyMessage();
sendMyMessage() 
})

export  function renderOtherMessage(response) {
  
  for (let i = 0; i < response.messages.length; i++) {
    const DATA = {
      NAME: response.messages[i].username,
      TEXT_MESSAGE: response.messages[i].message,
      TIME_MESSAGE: response.messages[i].createdAt,
     
  } 
 const chat = document.querySelector('.middle-chat');
  const templ = document.querySelector('#templ-other');
  templ.content.querySelector('.message-text__other>span').textContent=DATA.NAME +':'+ DATA.TEXT_MESSAGE;
   templ.content.querySelector('.message-time__other').textContent = getTime(DATA.TIME_MESSAGE);
  let elem = templ.content.cloneNode(true);
  

    chat.append(elem);
    

 }

}


 export const getTime = () => {

    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = (minutes<10) ? '0'+minutes: minutes;
    return `${hours}:${minutes}`;
  }

