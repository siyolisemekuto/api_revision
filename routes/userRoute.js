const express = require("express")
//connecting express router to my router
const router = express.Router();
const con = require("../lib/db_connection")

// register a user
router.post("/register", (req, res) =>  {
    try{
    let mysql = "INSERT INTO users SET ?";
    //the body requested
    const {
      user_name,
      user_email,
      user_password
    } = req.body;
  //database terms
    let user = {
      user_name,
      user_email,
      user_password
    };
    //SQL Query
    //connection to database made here
    con.query(mysql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json(`User ${(user.user_name)} created successfully`)
    });
  } catch (error) {
    console.log(error);
  }
})

//login a user
router.post("/login",(req,res) => {
    try {
      let mysql = "SELECT * FROM users WHERE ?";
      let user = {
        email: req.body.email
      };
      con.query(mysql, user, async (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
          res.json(`Email not found please register`);
        } else {
          const isMatch = req.body.password
        //comparing password
          if (!isMatch) {
            res.json(`Password incorrect`);
          }else{
            res.json(`Welcome ${(user.user_name)}`)
          } 
        }
     });
    } catch (error) {
      console.log(error);
    }
  });

  //select all users
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

//select single user
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