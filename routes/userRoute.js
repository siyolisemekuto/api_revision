const express = require ("express")
//connecting express router to my router
const router = express.Router();
const con = require ("../lib/db_connect")

router.get("/", (req,res) =>{
    try{
        con.query("SELECT * FROM users", (err, result) =>{
            if (err) throw err;
            res.send (result);
        })
    } catch (error){
        console.log (error)
        res.status (400).send(error)
    }
});

module.exports = router;