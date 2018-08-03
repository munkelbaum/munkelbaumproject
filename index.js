const express = require('express');
const routes = require( './Routes/routehandling');

const app = express();

routes(app);
const PORT = process.env.PORT || 8888;
app.listen(PORT);
