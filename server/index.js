const { server, port, hostname, callback } = require('./server');
require('dotenv').config();
// Bot token here
const TOKEN = process.env.TOKEN;
// require('./App/clientEvents').c.login(TOKEN);
server.listen(port, hostname, callback);