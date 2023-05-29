$=(x="*")=>document.querySelectorAll(x);

var Ajax = ajax(".", true);
Ajax.on('load',()=>{})
Ajax.get();
Ajax.send();
$('button')[0].addEventListener('click',()=>$('#demo')[0].innerHTML=Ajax.resText());