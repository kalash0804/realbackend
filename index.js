
// const express = require('express')
// const app = express()
// const mongoose= require('mongoose')
// const port = 3000
// const houseRouter = require('./routes/houseRoutes')

// const db = module.exports = async()=> {
//     try{
//         await mongoose.connect("mongodb://192.168.100.177:27017/",)
//         console.log("MongoDB Connection is successful")
//     }catch(e){
//         console.log(e);
//         console.log("MongoDB Connection is not successful")
//     }
// }
// db();


// const db = module.exports = async()=> {
//     try{
//         await mongoose.connect("mongodb+srv://cluster0.mru82u3.mongodb.net/realgrande?retryWrites=true&w=majority&appName=Cluster0",{
//             user : "kgupta",
//             pass : "kgupta" 
//         })
//         console.log("MongoDB Connection is successful")
//     }catch(e){
//         console.log(e);
//         console.log("MongoDB Connection is not successful")
//     }
// }
// db();

// app.use("/house/",houseRouter)


// app.listen(port,() => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })





const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
const houseRouter = require('./routes/houseRoutes')
const enquiryRouter = require('./routes/enquiryRoutes')
const userRouter = require('./routes/userRoutes')
const app = express()
dotenv.config()
const port=process.env.PORT

app.use(express.json())
app.use(cors())

const db = module.exports = async()=> {
    try{
        await mongoose.connect("mongodb+srv://cluster0.mru82u3.mongodb.net/realgrande?retryWrites=true&w=majority&appName=Cluster0",{
            user : process.env.DBUSER,
            pass :process.env.DBPASS 

        })
        console.log("MongoDB Connection is successful")
    }catch(e){
        console.log(e);
        console.log("MongoDB Connection is not successful")
    }
}
db();


app.use("/house/",houseRouter)
app.use("/enquiry/",enquiryRouter)
app.use("/user/",userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
