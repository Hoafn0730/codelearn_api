const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const viewEngine = require('./config/viewEngine');
const route = require('./routes');

const app = express();
const port = process.env.PORT || 6969;

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
route(app);

app.listen(port, () => {
    console.log(`App is running on port : http://localhost:${port}`);
});
