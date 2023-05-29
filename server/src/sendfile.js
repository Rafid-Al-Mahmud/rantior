const fs = require('fs');
const sendFile = (request, response, fileName = '/index.html') => {
    const filePath = __dirname + fileName;
    // const filePath = require('path').join(__dirname, fileName);
    // var stat = fileSystem.statSync(filePath);
    console.log(request.method + ': "' + fileName + '"');
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
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.end("404 not found. ERROR File does not exist\n" + filePath + '\n' + fileName);
    });
}
module.exports = sendFile;