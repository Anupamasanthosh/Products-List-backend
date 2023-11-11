const express = require('express')
const cors=require('cors')
require('dotenv').config()
require('./utils/dataBase')

const app=express()

const corsOptions = {
    origin: "https://product-lists.onrender.com"
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
