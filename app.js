const express = require('express')
const cors=require('cors')
require('dotenv').config()
require('./utils/dataBase')

const app=express()

const corsOptions = {
    origin: "https://unique-ganache-92c122.netlify.app"
}

app.use(cors(corsOptions));
app.use(express.json())

//routes

const userRoute=require('./routes/user')

app.use('/',userRoute)

app.listen(process.env.PORT,()=>
{
    console.log('server started')
})
