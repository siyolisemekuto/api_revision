const express = require ("express")
cors = require ("cors")
const app = express()
//app must get data from this port aka plug
app.set("port", process.envPORT || 3000)
//aka cable
app.use(express.json());
//shares resources across origins therefore allows process
app.use(cors())

//importing routes
const userRoute = require ("./routes/userRoute")
const productRoute = require ("./routes/productRoute")
const cartRoute = require ("./routes/cartRoute")

//get to front-end
app.get ("/", (req,res) =>{
    //msg will show database is connected
    res.json({msg:"We are here!!"})
})

//implementation of routes
//route link (this file for this url)
app.use("/users",userRoute)
app.use("/product",productRoute)
app.use("/cart",cartRoute)

 app.listen(app.get("port"),() =>{
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
 })