const express=require('express')
require('dotenv').config()
const workoutRoutes=require ('./routes/workout') //import file 
const mongoose=require('mongoose')
const Workout=require('./model/workoutmodel')
const cors=require('cors')
const app=express()
const userRoutes=require('./routes/user')
app.use(cors())
app.use(express.json()) 

app.use('/api/workout',workoutRoutes)
app.use('/api/user',userRoutes)
const connectDB= async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL)
      app.listen(process.env.PORT, () => {
        console.log('connected to db and listening')
       })
    } catch (error) {
      console.log(error.message)
    }
    }
    connectDB()


//mongodb+srv://ayaalsubh:<AYA1234567>@cluster0.qjzew33.mongodb.net/

