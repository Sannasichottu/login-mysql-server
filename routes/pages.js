const express = require('express');
const router = express.Router();
const useController = require("../controllers/users")

router.get(["/","/login"],(req,res)=> {
    res.render("login")
})

router.get("/register",(req,res)=> {
    res.render("register")
})

router.get("/profile",useController.isLoggedIn,(req,res)=> {
    if(req.user){
        res.render("profile",{user:req.user})
 }else {
     res.redirect("/login")
 }
})

router.get("/home",useController.isLoggedIn, (req,res)=> {
   // console.log(req.name);
   if(req.user){
       res.render("home",{user:req.user})
}else {
    res.redirect("/login")
}
})

module.exports = router;