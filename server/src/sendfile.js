const fs = require('fs');
const sendFile = (request, response, fileName = '/index.html') => {
    const filePath = __dirname.replace(/(\\rantior).*/, '$1') + fileName;
    // const filePath = require('path').join(__dirname, fileName);
    // var stat = fileSystem.statSync(filePath);
    console.log(`\n-----HTTP REQUEST:-----\n__dirname: ${__dirname}\n__dirname.replace: ${__dirname.replace(/(\\rantior).*/, '$1')}\nrequest.method: ${request.method}\nfileName: ${fileName}\nfilepath: ${filePath}`);
    // Check if file specified by the filePath exists
    fs.exists(filePath, function (exists) {
        if (exists) {
            // Content-type is very interesting part that guarantee that
            // Web browser will handle response in an appropriate manner.
            response.writeHead(200, {
                // "Content-Type": "application/octet-stream",
                "Content-Type": require('./mime').getType(filePath),
                // "Content-Disposition": "attachment; filename=" + fileName,
                //     "Content-Type": "audio/mpeg",
                //     "Content-Length": stat.size
            });
            var readStream = fs.createReadStream(filePath);
            // We replaced all the event handlers with a simple call to readStream.pipe()
            readStream.pipe(response);
            return;
        }
        // response.writeHead(200, {
        //     "Content-Type": require('./mime').getType(__dirname.replace(/(\\rantior).*/, '$1') + '\\Client' + '/404.html'),
        // });
        // fs.createReadStream(__dirname.replace(/(\\rantior).*/, '$1') + '\\Client' + '/404.html').pipe(response);
        // return;
        // response.writeHead(400, { "Content-Type": "text/html" });
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(`
        <html style='height: 80vh'>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 not found</title>
        <style>
        :root {
            --a: #7289da;
            --b: #424549; 
            --c: #36393e; 
            --d: #282b30; 
            --e: #1e2124; 
        }
        html{background-color: var(--a);}
        .fc>div>h3{text-decoration: 5px underline var(--b);}
        .fc>div>h3,.fc>div>p{display: inline;}
        .fc>div{padding:5px;margin: 5px;}
        .fc>h1{text-align:center;}
        .fc{box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;padding:5px;margin: 5px;color:white;background-color: var(--e)}
        </style>
        </head>
        <body style='height: 80vh'>
        <div class='fc' style='height: 80vh; font-weight: bold; font-family: system-ui, cursive;'>
            <h1>HTTP REQUEST:</h1>
            <div><h3>Status:</h3> <p>"404 not found. ERROR File does not exist."</p></div>
            <div><h3>\n__dirname:</h3> <p>"${__dirname}"</p></div>
            <div><h3>\n__dirname.replace:</h3> <p>"${__dirname.replace(/(\\rantior).*/, '$1')}"</p></div>
            <div><h3>\nrequest.method:</h3> <p>"${request.method}"</p></div>
            <div><h3>\nfileName:</h3> <p>"${fileName}"</p></div>
            <div><h3>\nfilepath:</h3> <p>"${filePath}"</p></div>
        </div>
        <script src='https://rafid-al-mahmud.github.io/cdn/fc.js'></script>
        <script>
        for (let i = 0; i < document.querySelectorAll('.fc-container').length; i++) {
            const element = document.querySelectorAll('.fc-container')[i];
            element.style.height='80vh';
          }
        </script>
        </body>
        </html>
        `);
    });
}
module.exports = sendFile;