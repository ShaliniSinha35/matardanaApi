const express = require("express");
const cors = require("cors");
const app = express();
const path=require("path")
app.use(cors());
const logo = require("./logo.json");
const banner=require("./banner.json")

const port = process.env.PORT || 5000;
// app.use("/images", express.static(path.resolve(__dirname, "/images")));
// const data = require("./data.json");
// const category = require("./category");


app.use(express.static('public'));
app.use('/public/images/logo', express.static(path.resolve(__dirname,'public/images/logo')));


// Serve the logo
app.get('/', (req, res) => {
  const newData = logo.map(item => {
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.img}` //  full image URL
    };
  });
  return res.status(200).json(newData);

});

// banner
app.use('/public/images/banner', express.static(path.resolve(__dirname,'public/images/banner')));
app.get('/banner', (req, res) => {
  const newData = banner.map(item => {
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.img}` //  full image URL
    };
  });
  return res.status(200).json(newData);

});


// app.get("/category", (req, res) => {
//   res.send(category);
// });
// app.use('/images',express.static('images'))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


