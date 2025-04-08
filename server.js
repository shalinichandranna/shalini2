//Imporiting all required external modules

const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});


 //App landing page http://localhost:3000/get
app.get('/get', (req, res) => {
  try
  {
    res.send("<h2 style='color:red' align='center'>Welcome To The Mern Stack,Backend</h2>");
  }
  catch(err)
  {
    console.log(err)
  }
});

//API Register page http://localhost:3000/register  or we can also used talend API tester for post message
  app.post("/register", async (req, res) => {
    const {username,email,password}=req.body
    try {
      const hashPassword=await bcryptjs.hash(password,10)
      const newUser = new User({username,email,password:hashPassword});
      await newUser.save()
      console.log("New User is Created....")
      res.json({message: "User Registred"})
      // res.status(200).json(newData);
    } catch (err) {
      console.error("Error creating User data:", err);
      res.send("Internal Server Error...!");
    }
});


//API login page http://localhost:3000/login
app.post("/login1", async (req, res) => {
  const { email, password } = req.body
  
  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user || !(await bcryptjs.compare(password, user.password))) { // Use user.password
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    
    res.json({ message: "Login Successful", username: user.username });

  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Server Error...!"); // Send proper status code
  }
});


//server connecting and testing

app.listen(PORT,(err)=>{
if(err)
{
    console.log(err)
}
console.log("Server is running on port :"+PORT)
})