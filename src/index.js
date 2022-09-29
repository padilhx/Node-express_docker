const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server está rodando em http://localhost:3000'));
