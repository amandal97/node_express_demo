const express = require('express');
const cors = require("cors");
const routes = require("./routes/routes");
const constants = require("./utils/constants");
const middlewares = require("./middlewares");

const app = express();

app.use(cors());

const port = constants.PORT_NUMBER;

app.use("/", routes)

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}!`));