const express = require("express")
const collection = require("./mongo")
const collection1 = require("./mongo1")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/exitdetails",async(req,res)=>{
    const{vehicleno,phoneno}=req.body

    try{
        const check=await collection1.findOne({vehicleno:vehicleno})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/entrydetails",async(req,res)=>{
    const{vehicleno,phoneno}=req.body

    const data={
        vehicleno:vehicleno,
        phoneno:phoneno
    }

    try{
        const check=await collection1.findOne({vehicleno:vehicleno})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection1.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.listen(8000,()=>{
    console.log("port connected");
})
