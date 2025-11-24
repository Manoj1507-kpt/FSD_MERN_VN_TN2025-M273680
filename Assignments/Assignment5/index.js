const express = require('express');
const app =express();
const mongoose=require('mongoose')

const userRouter=require('./Routes/routes');
const port =8000;
mongoose
.connect("mongodb+srv://manojkumarguru1507:7010737287@cluster0.w37qbci.mongodb.net/")
.then(()=>{
    console.log("connected to DB 🍃");
})
.catch((err)=>{
    console.log(err);
});
app.use(express.json());

app.use(userRouter);
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);

});
