$ = (x = "*") => document.querySelectorAll(x);


$('button')[0].addEventListener('click', () => {
    let Ajax = ajax(".", true);
    Ajax.on('load', () => { });
    Ajax.get();
    Ajax.send();
    $('#demo')[0].innerHTML = Ajax.resText()
});

function send() {
    let Ajax = ajax("/Client/index.html", true);
    Ajax.get();
    Ajax.send();
    $('#demo')[0].innerHTML = Ajax.resText()
}