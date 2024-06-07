const express = require('express');
const router = require('./routes/credRoute');
const cors = require('cors')
const connectDb = require('./config/dbConnection');
const app = express();
const port = 4001;

connectDb();
app.use(cors());
app.use(express.json());

app.use('/api', router)
app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})