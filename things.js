const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("GET route on things")
})
router.get('/things/:id([0-9]{5})',(req,res)=>{
    res.send("The id you specified is " + req.params.id)
})

router.post("/",(req,res)=>{
    res.send("POST route on things")
})

module.exports = router