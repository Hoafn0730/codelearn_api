const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(port, () => {
    console.log(`Backend NodeJS is running on port : http://localhost:${port}`);
});
