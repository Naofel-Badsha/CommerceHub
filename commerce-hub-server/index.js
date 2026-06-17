//-------Connect Server---------
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5050;

const mongoose = require('mongoose');

//---------Middleware------
app.use(express.json());
app.use(cors());

// commerce-hub-full-stack
// wfQIUilG6U9joLE3



async function main() {
  await mongoose.connect(process.env.DB_URL);

}
main().then(() => console.log('Mongodb Connnected Successfully')).catch(err => console.log(err));






app.get('/', (req, res) => {
  res.send('Hello CommerceHub Server is Running..!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})