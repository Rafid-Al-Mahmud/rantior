/**
 * AJAS REQUEST
 * @author Rafid Al Mahmud
 * @copyright 2023, all rights should goes to Rafid Al Mahmud.
 * @param {string} url - the file location. The url - A File On a Server
The url parameter of the open() method, is an address to a file on a server:
 * @param {boolean} async
 * - true (asynchronous) or false (synchronous). if true the onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.
 * - The file can be any kind of file, like.txt and.xml, or server scripting files like.asp and .php (which can perform actions on the server before sending the response back).
 * - Asynchronous - True or False ? Server requests should be sent asynchronously if `async`=false normally.
 * - The `async` parameter of the open() method should be set to true.
 * - By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead execute other scripts while waiting for server response. deal with the response after the response is ready.
 * - The default value for the `async` parameter is `async` = true. You can safely remove the third parameter from your code.
 * - Synchronous XMLHttpRequest(`async` = false) is not recommended because the JavaScript will stop executing until the server response is ready.If the server is busy or slow, the application will hang or stop.
 * - `async`: boolean
 * @param {string | null | undefined} username - optional user (username)
 * @param {string | null | undefined} password - optional psw (password)
 * @returns {object} 
 * - Based on your provided parameters it will return an object called `obj`.
 * - `obj` contains `on` `get` `post` `send`
 * - `on` : Executes `XMLHttpRequest` object's properties which start by `on`
 * - `get`: Specifies the method of request as GET.
 * - `post`: Specifies the method of request as POST.
 * - `send`: Send a request. Sends the request to the server. send() Used for GET requests. send(string) Used for POST requests.
 * 
 * 
 * GET or POST ?
 * @description
 * - GET is simpler and faster than POST, and can be used in most cases. However, always use POST requests when: A cached file is not an option(update a file or database on the server).
 * - Sending a large amount of data to the server(POST has no size limitations).
 * - Sending user input(which can contain unknown characters), POST is more robust and secure than GET.
 * 
 * @description GET Requests
 * - A simple GET request:
 * - Example 
 * - xhttp.open("GET", "demo_get.asp");
 * - xhttp.send();
 * - In the example above, you may get a cached result.To avoid this, add a unique ID to the URL:
 * - Example
 * - xhttp.open("GET", "demo_get.asp?t=" + Math.random());
 * - xhttp.send();
 * - If you want to send information with the GET method, add the information to the URL:
 * - Example
 * - xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
 * - xhttp.send();
 * - How the server uses the input and how the server responds to a request, is explained in a later chapter.
 * - 
 * @description POST Requests
 * - A simple POST request:
 * - Example
 * - xhttp.open("POST", "demo_post.asp");
 * - xhttp.send();
 * - To POST data like an HTML form, add an HTTP header with setRequestHeader().Specify the data you want to send in the send() method:
 * - Example
 * - xhttp.open("POST", "ajax_test.asp");
 * - xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 * - xhttp.send("fname=Henry&lname=Ford");
 */

function ajax(url, async, username, password) {
    // ----------------XMLHttpRequest Object Methods
    // ----------------XMLHttpRequest Object Properties

    /**
     * AJAX - XMLHttpRequest
     * Create an (new) XMLHttpRequest object
     * The XMLHttpRequest object is used to request data from a server.
     */
    const xhr = new ((typeof require === 'function')?require('./xhr').XMLHttpRequest:XMLHttpRequest);

    /**
     * 
     */
    const obj = {
        /**
         * Holds the state of the XMLHttpRequest.
         * 0: request not initialized
         * 1: server connection established
         * 2: request received
         * 3: processing request
         * 4: request finished and response is ready
         */
        readyState: () => xhr.readyState,

        //Cancels the current request
        abort: () => xhr.abort(),

        //Returns the response data as a string
        resText: () => xhr.responseText,

        //Returns the response data as XML data
        resXML: () => xhr.responseXML,

        /**
         * Holds the status of the XMLHttpRequest.
         * Returns the status-number of a request
         * `200`: "OK"
         * `403`: "Forbidden"
         * `404`: "Not Found"
         * For a complete list go to the Http Messages Reference
         */
        status: () => xhr.status,

        //Returns the status-text (e.g. "OK" or "Not Found")
        statusText: () => xhr.statusText,

        //Returns header information
        getAllResponseHeaders: () => xhr.getAllResponseHeaders(),

        //Returns specific header information
        getResponseHeader: name => xhr.getResponseHeader(name),

        //	Adds a label/value pair to the header to be sent
        setRequestHeader: (name, value) => xhr.setRequestHeader(name, value),

        xhr: xhr,

        on: (onev, _) => {
            if (onev === 'abort') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.onabort = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
            if (onev === 'error') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.onerror = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
            else if (onev === 'load') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.onload = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
            else if (onev === 'loadend') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.onloadend = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
            else if (onev === 'loadstart') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.onloadstart = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
            else if (onev === 'onprogress') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.progress = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
            else if (onev === 'readystatechange') {
                /**
                 * The onreadystatechange Property
                 * The readyState property holds the status of the XMLHttpRequest.
                 * The onreadystatechange property defines a callback function to be executed when the readyState changes.
                 * The status property and the statusText properties hold the status of the XMLHttpRequest object.
                 * The onreadystatechange function is called every time the readyState changes.
                 * When readyState is 4 and status is 200, the response is ready:
                 */

                //Defines a function to be called when the readyState property changes
                xhr.onreadystatechange = function () {
                    _();
                    //Defines a function to be called when the readyState property changes
                    // if (this.readyState == 4 && this.status == 200) {}
                };
            }
            else if (onev === 'timeout') {
                // defines a callback function to be called when the request is received (loaded)
                xhr.ontimeout = function () {
                    /* In this case, the callback function should contain the code to execute when the response is ready.
                    What to do when the response is ready. Here you can use the Data.*/
                    _();
                }
            }
        },
        get: () => {
            /**
             * Specifies the type of request
             * method: the type of request: GET or POST
             * url: the server (file) location
             * async: true (asynchronous) or false (synchronous)
             */
            xhr.open("GET", url, async = true, username = '', password = '');
        },
        post: () => {
            /**
             * Specifies the type of request
             */

            xhr.open("GET", url = 'https://rafid-al-mahmud.github.io/cdn/date.js', async = true, username = '', password = '');
        },
        send: () => {
            /**
             * Send a request
             * Sends the request to the server
             * send() Used for GET requests
             * send(string) Used for POST requests
             */
            xhr.send();
        }
    };
    return obj;
    console.log(this.get);
}
if(typeof module==='object') module.exports = ajax;