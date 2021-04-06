const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const UserModel=require('./models/Users');
const FoodModel=require('./models/Food');

app.use(express.json())
app.use(cors());
mongoose.connect("mongodb+srv://arafat:12345@cluster0.7xpex.mongodb.net/FoodDatabase?retryWrites=true&w=majority", {
useNewUrlParser: true,
});

app.post("/insert",async(req,res)=>{
    const First=req.body.firstname1;
    const last=req.body.lastname1;
    const email=req.body.email1;
    const username=req.body.username1;
    const password=req.body.password1;
    const user=new UserModel({firstName:First,LastName:last,email:email,username:username,password:password});
    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
});

app.post("/insert2",async(req,res)=>{
    const user=req.body.user;
    const itemname=req.body.itemname;
    const unit=req.body.unit;
    const calories=req.body.calories;
    const carbs=req.body.carbs;
    const fats=req.body.fats;
    const proteins=req.body.proteins;
    const salt=req.body.salt;
    const sugar=req.body.sugar;
    const Food=new FoodModel({User:user,Itemname:itemname,Unit:unit,Calories:calories,Carbs:carbs,Fats:fats,Proteins:proteins,Salt:salt,Sugar:sugar});
    try {
        await Food.save();
    } catch (err) {
        console.log(err);
    }
});

app.put("/update",async(req,res)=>{
    const Upusername=req.body.Upusername;
    const Upitemname=req.body.Upitemname;
    const Upunit=req.body.Upunit;
    const Upcalories=req.body.Upcalories;
    const Upcarbs=req.body.Upcarbs;
    const Upfats=req.body.Upfats;
    const Upproteins=req.body.Upproteins;
    const Upsalt=req.body.Upsalt;
    const Upsugar=req.body.Upsugar;
    const filter = { User: Upusername,Itemname: Upitemname };
    const Data = { User: Upusername,Itemname: Upitemname,Unit: Upunit,Calories: Upcalories,Carbs: Upcarbs,Fats: Upfats,Proteins: Upproteins,Salt: Upsalt,Sugar: Upsugar};
    try {
        await FoodModel.findOneAndUpdate(filter,Data);
    } catch (err) {
        console.log(err);
    }
});

app.post("/delete",async(req,res)=>{
    const Upusername=req.body.Upusername;
    const Upitemname=req.body.Upitemname;
    const filter = { User: Upusername,Itemname: Upitemname };
    try {
        await FoodModel.findOneAndDelete(filter).exec();
        res.send("deleted");
    } catch (err) {
        console.log(err);
    }
});

app.get("/search/:Itemname",async(req,res)=>{
    
     const search=req.param.Itemname;
     const filter = { Itemname: search };
     console.log("Name "+search);
    FoodModel.find({filter},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    });
 });

app.get("/read2",async(req,res)=>{
    FoodModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    });
 });
 

app.get("/read",async(req,res)=>{
   UserModel.find({},(err,result)=>{
       if(err){
           res.send(err);
       }
       res.send(result);
   });
});


app.listen(3001,()=>{
    console.log("Server running");
})