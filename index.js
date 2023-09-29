require('dotenv').config();
const { PORT } = process.env || 3001;
const { db } = require('./src/db');
const server = require('./src/server');

server.listen(PORT, async () => {
    await db.sync({alter: true});
});