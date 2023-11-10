const express = require('express')
const cors=require('cors')
require('dotenv').config()
require('./utils/dataBase')

const app=express()

app.use(cors())
app.use(express.json())

//routes

const userRoute=require('./routes/user')

app.use('/api',userRoute)

app.listen(process.env.PORT,()=>
{
    console.log('server started')
})
