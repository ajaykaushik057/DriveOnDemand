import express, { urlencoded } from 'express'


const app = express();


// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

import userRouter from "./routes/user.routes.js"


app.use("/api/v1/users",userRouter)


export {app}