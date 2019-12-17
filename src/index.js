const express = require('express');
const cors = require('cors')
const app = express();
const {Client} = require('pg')

const pgClient = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
})

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('COUCOU')
})


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started. PORT : ${port}`)
});
