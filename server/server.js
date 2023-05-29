const http = require('http');
http.createServer((req, res) => {
    if (req.url === '/') sendFile(req, res, '/index.html');
    else if (req.url !== '/') sendFile(req, res, req.url);
    else sendFile(req, res);
}).listen(3000);

const sendFile = require('../src/sendfile');
const Ajax = ajax("http://driverdan.com", true);
Ajax.on('load',()=>{})
Ajax.on('readystatechange',()=>{
    console.log("State: " + Ajax.readyState());
	if (this.readyState === 4) {
		console.log("Complete.\nBody length: " + Ajax.responseText().length);
		console.log("Body:\n" + Ajax.responseText());
	}
})
Ajax.get();
Ajax.send();
console.log(Ajax.resText());