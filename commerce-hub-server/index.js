//-------Connect Server---------
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;


//---------Middleware------
app.use(express.json());
app.use(cors());






//--------Make--Collection and Database----------
  const db = client.db("mongodb-basics")
  const usersCollection = db.collection("users")


app.get('/', (req, res) => {
  res.send('Hello Mongodb!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})