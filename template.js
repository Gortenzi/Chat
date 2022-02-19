export const sendmessagesBtn = document.querySelector('.sendmessages-btn')
export function sendMyMessage(){

  const message = document.querySelector('.message-input').value;
  const chat = document.querySelector('.middle-chat');
  const templ = document.querySelector('#templ');
  const txt = templ.content.querySelector('span');
  const time = templ.content.querySelector('.message-time')
  txt.textContent = (`I: ${message}`);
  time.textContent = getTime();
  let elem = templ.content.cloneNode(true);
  
  chat.append(elem);
document.querySelector('.inp').form.reset()
  
}

sendmessagesBtn.addEventListener('click', (e) => {
  if(document.querySelector('.message-input').value =='') return;
else if(e.code ==="Enter") sendMyMessage();
sendMyMessage() 
})


export const getTime = () => {

    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = (minutes<10) ? '0'+minutes: minutes;
    return `${hours}:${minutes}`;
  }