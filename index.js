const express = require("express");
const cors = require("cors");
const app = express();
const path=require("path")
app.use(cors());
const logo = require("./logo.json");

const port = process.env.PORT || 5000;
// app.use("/images", express.static(path.join(__dirname, "images")));
// const data = require("./data.json");
// const category = require("./category");


// app.use(express.static('public'));
// app.use('/images', express.static('images'));


// Serve the images


app.get('/', (req, res) => {
  const newData = logo.map(item => {
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.img}` // Provide the full image URL
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

// https://demo-api-3fxf.vercel.app/
