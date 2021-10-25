const {MongoClient} = require('mongodb')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4000

// MiddleWire
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z46cs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const run = async () => {
   try{
      await client.connect();
      console.log('database ready')

   } finally{
      await client.close();
   }
}
run().catch(console.dir)
app.get('/', (req, res) => {
   console.log(uri)
   res.send('Project is working well!')
})


app.listen(port, (req, res) => {
   console.log('This server is running at port no: ', port)
})
