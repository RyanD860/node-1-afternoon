const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/../public/build"));

app.use(bodyParser.json());

const port = 3000;

const {
  create,
  read,
  update,
  destroy
} = require("./controllers/messages_controller");

const baseURL = "/api/messages";

app.get(baseURL, read);
app.post(baseURL, create);
app.put(`${baseURL}/:id`, update);
app.delete(`${baseURL}/:id`, destroy);

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
