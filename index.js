import 'dotenv/config'
import express from 'express'
import dbConnection from './src/db/DbConnection.js'
import UserRouter from './src/routers/UserRouter.js'
import ProductRouter from './src/routers/ProductRouter.js'

const app = express()
app.use(express.json())
app.use("/api/user",UserRouter)
app.use("/api/product",ProductRouter)
app.get("/",(req,res)=>{
    res.json({message:"hello"})
   
})

app.listen(5000,()=>{
    dbConnection()
    console.log(`server is listning on port 5000`)
})