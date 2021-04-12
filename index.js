const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const PORT = 8081;
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});