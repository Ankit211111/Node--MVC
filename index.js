const express =require("express");
const {connectMongoDb} = require("./connection");

const {logReqRes}=require("./middlewares")//by default it takes index

const userRouter = require("./routes/user.js")

const app = express();
const PORT = 8000;



//connection
connectMongoDb("mongodb://127.0.0.1:27017/new-users");

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users" ,userRouter);


app.listen(PORT,()=>console.log("Server Started"));

