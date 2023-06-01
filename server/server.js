require('dotenv').config();
const http = require('http');
const sendFile = require('./src/sendfile');
const ajax = require('../Client/lib/ajax');
const port = process.env.port || 3000;
const hostname = process.env.hostname || 'localhost';
const server = http.createServer((req, res) => {
    if (req.url === '/') sendFile(req, res, '/index.html');
    else if (req.url !== '/') sendFile(req, res, req.url);
    else sendFile(req, res);
});

const Ajax = ajax("http://driverdan.com", true);
Ajax.on('load', () => { })
Ajax.on('readystatechange', () => {
    console.log("State: " + Ajax.readyState());
    if (this.readyState === 4) {
        console.log("Complete.\nBody length: " + Ajax.responseText().length);
        console.log("Body:\n" + Ajax.responseText());
    }
})
Ajax.get();
Ajax.send();
console.log(Ajax.resText());
module.exports = {
    server,
    port,
    hostname,
    callback: () => console.log(`Main server started in http://${hostname}:${port}/`)
};