const express = require("express");
const cors = require("cors");
const app = express();
const path=require("path");
const bodyParser = require('body-parser');
app.use(cors());
const logo = require("./logo.json");
const banner=require("./banner.json")
const category=require("./category.json")
const products=require("./products.json")

const port = process.env.PORT || 5000;


app.use(bodyParser.json());

app.use(express.static('public'));



// Serve the logo
app.use('/public/images/logo', express.static(path.resolve(__dirname,'public/images/logo')));
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

// category
app.use('/public/images/category', express.static(path.resolve(__dirname,'public/images/category')));
app.get('/category', (req, res) => {
  const newData = category.map(item => {
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.img}` //  full image URL
    };
  });
  return res.status(200).json(newData);

});
// products
app.use('/public/images/product', express.static(path.resolve(__dirname,'public/images/product')));
app.get('/product', (req, res) => {
  const newData = products.map(item => {
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.images[0]}` //  full image URL

    };
  });
  return res.status(200).json(newData);


});



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


