const exp=require('express');
const mysql=require('mysql2');
const bp=require('body-parser');
const cors=require('cors');
const obj=exp();
obj.use(bp.json());
obj.use(cors());
obj.use(exp.json());

const port=8000;
obj.listen(port,(err)=>
{
  if(err)
  {
    return err;
  }
  else
  {
    console.log(`"Server listening....at ${port}"`);
  }
})


const db=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"1234567890Aa@",
    database:"easy_ride"
})

db.connect((err)=>
{
  if(err)
  {
    console.log(`"Not connected" ${err}`);
}
  else
  {
    console.log("Connected with DB");
}
})



//sign_up
obj.post("/add",(req,res)=>
{
  const sql="INSERT INTO sign_up (full_name,email_id,password) values (?,?,?)";
  db.query(sql,[req.body.full_name,req.body.email_id,req.body.password],(err,data)=>
  {
    if(err)
      return res.json(err)
    return res.json(data)
  })
})


//login
obj.post('/login', async (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM sign_up WHERE email_id = ?', [email], (err, user) => {
      if (err) {
          return res.status(500).json({ message: 'Server error' });
      }

      if (user.length === 0) {
          return res.status(404).json({ message: 'User not found' });
      }

      if (user[0].password === password) {
          return res.status(200).json({ message: 'Login successful', user: user[0] });
      } else {
          return res.status(401).json({ message: 'Invalid password' });
      }
  });
});
