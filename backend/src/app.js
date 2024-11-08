import express from 'express'
import cors from  'cors'

const app = express();

app.use(cors({
    origin:"*",
    credentials: true,
    optionsSuccessStatus:200
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

import userRouter from "./routes/user.routes.js"


app.use("/api/v1/users",userRouter)


export {app}