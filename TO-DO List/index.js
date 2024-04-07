const express=require('express');

const app=express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.json());
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: false }));

const arr=[];

app.get('/form',(req,res)=>{
    res.render("form.ejs",{data:arr});
})

app.post('/form',(req,res)=>{
    const data=req.body.Task;
    arr.push(data);
    console.log(arr);
    return res.redirect("/form");
})

// TO-DO LIST
const obj=[]; // array with objects

app.get('/data',(req,res)=>{
    res.render("data.ejs",{data:obj});
})

app.post('/data',(req,res)=>{
    
    const name=req.body.name;

    const dat={
        id:obj.length + 1,
        name:name,
        isDone:false
    }
//     let auth=obj.findIndex((item)=>{
//         return item.id ;
//     })
//     if(auth!==-1){
//         res.send("Id or task all ready exist")
//     }else{
//     obj.push(dat);
// }

obj.push(dat);
    console.log(obj);
    return res.redirect("/data");
})

// app.delete('/data/:id',(req,res)=>{
//     const id=req.params.id;

//   const dat=  obj.findIndex((item)=>{
//         return item.id==id;
//     })

//     console.log(dat)
//    if(dat==-1){
//     res.send("task not found")
//    }

//    if(dat!==-1){
//     obj.splice(dat,1);
//     console.log(obj)

//     res.redirect('/data');
//    }
// })

app.get('/data/:id',(req,res)=>{
        const id=req.params.id;
    
      const dat=  obj.findIndex((item)=>{
            return item.id==id;
        })
    
        console.log(dat)
       if(dat==-1){
        res.send("task not found")
       }
    
       if(dat!==-1){
        obj.splice(dat,1);
        console.log(obj)
    
        res.redirect('/data');
       }
    })
    
    app.get('/check/:id',(req,res)=>{
        const id=req.params.id;

        const index = obj.find(item => item.id == id);
    
        if (index === -1) {
            return res.send("Task not found");
        }
    
        index.isDone = !index.isDone;
        console.log(obj);
        return res.redirect('/data');
       }
    )
    




// TO-DO LIST

app.listen(4000,()=>{
    console.log("server created at port 4000")
})