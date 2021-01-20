const express = require('express')
const app = express()
//const morgan = require('morgan') // morgan keep tracks of routing means where the request comes from and where to going
const {getPost} = require("./routes/post")

const myOwnMiddleWare = (req, res, next) => {
  console.log("This is Middle Ware");
  next();
};

// middle ware is used to do tasks after starting and before ending of our application (in-between handling e.g: authentication )
//app.use(morgan("dev")); // implemented morgan for dev command which we defined in package.json
app.use(myOwnMiddleWare); // implemented morgan for our defined function


app.get("/", getPost);

app.listen(3030, ()=> {
  console.log('Port: 3030 is listening.');
});
