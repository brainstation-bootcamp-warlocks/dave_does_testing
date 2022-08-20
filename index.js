const express = require('express');
const handlers = require('./handlers');
const {
    env: {
        PORT = 3000,
    }
} = process;

const app = express();

app.get('/', handlers.root);

app.get('/:message', handlers.message);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
