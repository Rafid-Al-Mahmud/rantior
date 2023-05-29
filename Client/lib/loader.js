onabort: null
onerror:null
onload:null
onloadend:null
onloadstart:null
onprogress:null
onreadystatechange:null
ontimeout:null
readyState: 4
response: ""
responseType: ""
responseURL: "http://127.0.0.1:5500/message.json"
responseXML: null
status: 200
statusText: "OK"
timeout: 0
upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
withCredentials: false
[[Prototype]]: XMLHttpRequest
xhr.DONE
xhr.HEADERS_RECEIVED
xhr.LOADING
xhr.UNSENT
xhr.abort
xhr.addEventListener
xhr.dispatchEvent
xhr.getAllResponseHeaders
xhr.getResponseHeader
xhr.onabort +
xhr.onerror +
xhr.onload +
xhr.onloadend +
xhr.onloadstart +
xhr.onprogress +
xhr.onreadystatechange +
xhr.ontimeout +
xhr.open +
xhr.overrideMimeType
xhr.readyState
xhr.removeEventListener
xhr.response
xhr.responseText
xhr.responseType
xhr.responseURL
xhr.responseXML
xhr.send
xhr.setRequestHeader
xhr.status
xhr.statusText
xhr.timeout
xhr.upload
xhr.withCredentials


Method	Description
setRequestHeader(header, value)	Adds HTTP headers to the request

header: specifies the header name
value: specifies the header value
Synchronous Request
To execute a synchronous request, change the third parameter in the open() method to false:

xhttp.open("GET", "ajax_info.txt", false);
Sometimes async = false are used for quick testing.You will also find synchronous requests in older JavaScript code.

Since the code will wait for server completion, there is no need for an onreadystatechange function:

    Example
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;
Synchronous XMLHttpRequest(async = false) is not recommended because the JavaScript will stop executing until the server response is ready.If the server is busy or slow, the application will hang or stop.

Modern developer tools are encouraged to warn about using synchronous requests and may throw an InvalidAccessError exception when it occurs.






    AJAX - Server Response
Server Response Properties
Property	Description
responseText	get the response data as a string
responseXML	get the response data as XML data
The responseText Property
The responseText property returns the server response as a JavaScript string, and you can use it accordingly:

Example
document.getElementById("demo").innerHTML = xhttp.responseText;
The responseXML Property
The XMLHttpRequest object has an in -built XML parser.

The responseXML property returns the server response as an XML DOM object.

Using this property you can parse the response as an XML DOM object:

Example
Request the file cd_catalog.xml and parse the response:

const xmlDoc = xhttp.responseXML;
const x = xmlDoc.getElementsByTagName("ARTIST");

let txt = "";
for (let i = 0; i < x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = txt;

xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
Server Response Methods
Method	Description
getResponseHeader()	Returns specific header information from the server resource
getAllResponseHeaders()	Returns all the header information from the server resource
The getAllResponseHeaders() Method
The getAllResponseHeaders() method returns all header information from the server response.

    Example
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    document.getElementById("demo").innerHTML =
        this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
The getResponseHeader() Method
The getResponseHeader() method returns specific header information from the server response.

    Example
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    document.getElementById("demo").innerHTML =
        this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();