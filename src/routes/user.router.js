const { Router } = require("express")
const userService = new (require("../services/user.service"))

const route = Router();

route.get("/",async (req,res,next)=>{
    try{
        const users = await userService.findAll()
        res.json(users);
    }catch(error){
        next(error)
    }
})

module.exports = route