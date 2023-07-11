const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb1 connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema1=new mongoose.Schema({
    vehicleno:{
        type:String,
        required:true
    },
    phoneno: {
        type: Number,
        required:true,
    }
})

const collection1 = mongoose.model("collection1",newSchema1)


module.exports=collection1
