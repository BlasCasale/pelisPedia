require('dotenv').config();
const { PORT } = process.env;
const { db } = require('./src/db');
const server = require('./src/server');

server.listen(PORT, async () => {
    await db.sync({alter: true})
    console.log(`Listening on PORT localhost:${PORT}`);
});