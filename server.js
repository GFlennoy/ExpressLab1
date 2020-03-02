//require the Express module
const express = require("express");
//require the cors module
const cors = require("cors");
//create an instance of an Express server
const app = express();
//accept json from requests
app.use(express.json());
//allow cors
app.use(cors());

//import routes.js for endpoints
const cartItemsRoutes = require("./routes.js");
//tell the server to use our cart-items routes/make endpoints available
app.use("/", cartItemsRoutes);

//define a port
const port = 8888;

//endpoints
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
