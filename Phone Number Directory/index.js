const express=require('express');
const app=express();

// routes import from ../routes/user.js
const userRouter=require('./routes/user')


// middlewares
app.use(express.json());
app.set("view engine","ejs");
app.use( express.urlencoded({extended:false}));
app.use(express.static('assets')) //for using external css

app.use('/user',userRouter);


app.listen('3000',()=>{
    console.log("server created at port 3000");
})