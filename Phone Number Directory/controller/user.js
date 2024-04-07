// arr import from model/arr.js
const{arr}=require('../model/form');




// form
function getUser(req,res){
    res.render("form.ejs",{data:arr});
}

function postUser(req,res){
    const{number}=req.body;
    const data={
        id:Date.now().toString(),
        number:number
    }

    arr.push(data);
    res.redirect('/user/form')
}

function deleteNumber(req,res){
        const{id}=req.params;
        const exist=arr.findIndex((item)=>{
            return item.id==id;
        })

        if(exist!==-1){
            arr.splice(exist,1)
        }
        if(exist==-1){
            res.send("Number doesn't exist")
        }
        return res.redirect("/user/form")
}

function updateNumber(req,res){
    const{id}=req.params;
    const{newNumber}=req.body;
    const exist=arr.find((item)=>{
        return item.id==id;
    })
    if(!exist){
        res.send("please enter Valid Number")
    }

    if(exist){
        exist.number=newNumber;
        return res.redirect("/user/form");
    }
}
module.exports={getUser:getUser,postUser:postUser,deleteNumber:deleteNumber,updateNumber:updateNumber};