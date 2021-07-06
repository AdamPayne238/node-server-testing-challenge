require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 7272;
server.listen(port, () => console.log(`\n** No Errors On Port ${port} **\n`));