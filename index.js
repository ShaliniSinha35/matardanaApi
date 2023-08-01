const express = require("express");
const cors = require("cors")
const app = express();



app.use(cors())
const data=require("./data.json")
const category=require("./category")
const logo=require("./logo.json")

const port = process.env.PORT || 5000



app.get("/", (req, res) => {
  res.send(data);
});
app.get("/logo", (req, res) => {
  res.send(logo);
});
app.get("/category", (req, res) => {
  res.send(category);
});
app.use('/images',express.static('images'))



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// https://demo-api-3fxf.vercel.app/