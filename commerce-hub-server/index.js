//-------Connect Server---------
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5050;

//-------getting-started.js---------
const mongoose = require('mongoose');

//---------Middleware------
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173/',
  credentials: true
}));


//-----------routes----path---decleration----------
const userRoutes = require('./src/users/user.route')

//---------Root Path---------
app.use('/api/auth', userRoutes)





//---------Cunnect--------Datasbases--------
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get('/', (req, res) => {
    res.send('Hello CommerceHub Server is Running..!')
  })
}
main()
  .then(() => console.log('Mongodb Connnected Successfully'))
  .catch(err => console.log(err));


//-----------listen port----------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})