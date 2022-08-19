const express = require ("express")
//connecting express router to my router
const router = express.Router();
const con = require ("../lib/db_connection")



//get all products
router.get("/", (req,res) =>{
    try{
        con.query("SELECT * FROM product", (err, result) =>{
            if (err) throw err;
            res.send (result);
        })
    } catch (error){
        console.log (error)
        res.status (400).send(error)
    }
});

//get single product
router.get("/:id", (req,res) =>{
    try{
        con.query(
        `SELECT * FROM users WHERE user_id = "${req.params.id}"`, 
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    );
    } catch(error){
        console.log(error);
    };
})

module.exports = router;