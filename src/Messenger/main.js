import './main.css'

let input = document.querySelector('.text_field');
let submit = document.querySelector('.button');


submit.addEventListener('click',(event)=>{
  event.preventDefault();
  let message=input.value;
  input.value='';
  let NDate=new Date();
  let messageObject={
    name:'you',
    date:''+(NDate.getHours())+':'+(NDate.getMinutes())+'',
    messages:message
  };
  document.getElementById("message_field").innerHTML += "<br/><b>" + messageObject['date']+':'+messageObject['name']+':'+messageObject['messages'] + "</b><br/>";
});
