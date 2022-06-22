const express = require('express');
require('express-async-errors');
const routes = require('./routes/index');
const { error } = require('./middleware/index');

// ...

const app = express();

app.use(express.json());

// ...

app.use(routes);

app.use(error);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
