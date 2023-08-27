const express = require('express');
const jwt = require('jsonwebtoken');
const MY_KEY = "AbhishekAbbi";
// const popupS = require('popups');

const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const app = express();
const port = 5173;
const {User,Hospital,Lab,Request,Doctor,Hospitalform,Laboratoryform} = require('./models.js');


const mongoURL = "mongodb+srv://abhishekabbiwork:enigma@enigma.prmugjv.mongodb.net/";
mongoose.connect(mongoURL).then(
  result => {
    console.log("connected to mongodb");
  }
).catch(
  err => {
    console.log(err);
  }
);





app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
let corsOptions = {
  origin : ['http://localhost:3000'],
}
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(cookieParser());



const auth = async (req, res, next) => {
  


  const authHeader = req.cookies.authorization;
  if (!authHeader) {
    req.body.msg="no";

   
    return res.status(403).json({ msg: "no" });
  }

  const decoded = jwt.decode(authHeader, MY_KEY);

  if (!decoded._id) {
    req.body.msg="no";
    return res.status(400).json({ msg: "no" });
  }

  req.body.msg="yes";

  req.body.userid = decoded._id;

  console.log("user authenticated");

  next();


}


app.get('/authorize',auth,async (req,res) => {
  const userid = req.body.userid;

  let curruser = await User.findById(userid);

  res.status(200).json({name:curruser.name});

  

})

app.get("/", (req, res) => {
  res.json({ msg: "hello world" });


});


app.post('/signup/patient', async function (req, res) {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const age = req.body.age;
  const gender = req.body.gender;
  const bloodgroup = req.body.bloodgroup;
  const address = req.body.address;
  


  if (!email || !password||!name||!age||!gender||!bloodgroup||!address ){
    res.status(400).json({ msg: 'Missing input' })
    return;
  }

  let alreadyexist = await User.findOne({ email: email });



  if (alreadyexist) {

    res.status(409).json({ msg: 'This email already exists' })
    return;
  }
  const NewUser = new User({
    name,
    email,
    password,


  })

  NewUser.save()
    .then(result => {
      console.log("Sign up done");
      res.json({url: 'http://localhost:3000/login'});
    })
    .catch(err => {
      res.send(err);
    })

  //  res.status(200).json({msg:'Sign up succesful'})

})



app.get('/signup', (req, res) => {
  res.send('GET request to signup endpoint successful!');
});


app.get('/login', (req, res) => {
  res.send('GET request to login endpoint successful!');
});



app.post('/login', async function (req, res) {

  const email = req.body.email;
  const password = req.body.password;
  const type = req.body.type;

  if (!email || !password) {
    res.status(400).json({ msg: 'Missing input' })
    return;
  }

  let curruser = await User.find({ email: email }).limit(1);
 


  if (!curruser[0]) {
    res.status(404).json({ msg: 'Email not found' })

    return;
  }

  if (curruser[0]) {
    curruser = curruser[0].toJSON();
    if (curruser.password != password || curruser.type !=type) {
      res.status(409).json({ msg: 'Wrong email or password' })
      return;
    }
    else{
      const token = jwt.sign(curruser, MY_KEY);


      res.cookie('authorization', token, { httpOnly: true , sameSite: 'Lax' });
      return res.json({url: 'http://localhost:3000/',token});
    }
  }
  
    
  

});

app.post('/logout',(req,res) =>{
  res.clearCookie('authorization');
  res.json({url: 'http://localhost:3000/',msg:"Logged Out Succesfully"});
});


app.get("/user/me", auth, async (req, res) => {
  const userid = req.body.userid;
  let curruser = await User.findById(userid);

  if (!curruser) {

    res.status(404).send("user not found" + userid);
  }

  res.json({ curruser });

})











app.get('/hospital/assign', (req, res) => {


  res.send('Hello World!');
});
app.post('/hospital/assign',(req,res) =>{

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const date=req.body.date;
  const time=req.body.time;
  const modeofconsultation=req.body.modeofconsultation;
  const notes=req.body.notes;

  const NewUser = new DrAssign({
    firstname,
    lastname,
    date,
    time,
    modeofconsultation,
    notes,


  })
  NewUser.save()
    .then(result => {
      console.log("Sign up done");
      
    })
    .catch(err => {
      res.send(err);
    })

});




app.get('/hospital/myrequests',auth, (req, res) => {
  res.send('Hello World!');

});
app.post('/hospital/myrequests',(req,res) =>{
  res.send('Hello World!');
});



app.get('/hospital/requestdetails', (req, res) => {
  res.send('Hello World!');
});
app.post('/hospital/requestdetails',(req,res) =>{
  res.send('Hello World!');
});



app.post('/laboratory/requestdetails',(req,res) =>{
  res.send('Hello World!');
});
app.get('/laboratory/requestdetails', (req, res) => {
  res.send('Hello World!');
});


app.post('/laboratory/myrequests',(req,res) =>{
  res.send('Hello World!');
});
app.get('/laboratory/myrequests', (req, res) => {
  res.send('Hello World!');
});



app.post('/laboratory/submitreport',(req,res) =>{
  res.send('Hello World!');
});
app.get('/laboratory/submitreport', (req, res) => {
  res.send('Hello World!');
});







app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/login', async function (req, res) {

  const email = req.body.email;
  const password = req.body.password;
  const type = req.body.type;

  if (!email || !password) {
    res.status(400).json({ msg: 'Missing input' })
    return;
  }
  let curruser=[];
 if(type=="patient"){
  curruser = await User.find({ email: email }).limit(1);
 }
 if(type=="hospital"){
   curruser = await Hospital.find({ email: email }).limit(1);
 }
 if(type=="laboratory"){
   curruser = await Lab.find({ email: email }).limit(1);
 }
 


  if (!curruser[0]) {
    res.status(404).json({ msg: 'Email not found' })

    return;
  }

  if (curruser[0]) {
    curruser = curruser[0].toJSON();
    if (curruser.password != password) {
      res.status(409).json({ msg: 'Wrong email or password' })
      return;
    }
    else{
      const token = jwt.sign(curruser, MY_KEY);


      res.cookie('authorization', token, { httpOnly: true , sameSite: 'Lax' });
      return res.json({url: 'http://localhost:3000/',token});
    }
  }
  
    
  

});




app.post('/signup/hospital',async (req,res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const address = req.body.address;
  


  if (!email || !password||!name||!state||!city||!pincode||!address) {
    res.status(400).json({ msg: 'Missing input' })
    return;
  }
  let alreadyexist=await User.findOne({ email: email });

  if (alreadyexist) {
    res.status(409).json({ msg: 'This email already exists' })
    return;
  }

  const NewUser = new Hospital({
    name,
    email,
    password,
    state,
    city,
    pincode,
    address,

  })
  NewUser.save()
    .then(result => {
      console.log(result);
      
    })
    .catch(err => {
      res.send(err);
    })

  // res.send('Hello World!');
});



app.get('/signup/laboratory', (req, res) => {
  res.send('Hello World!');
});


app.post('/signup/laboratory',(req,res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const address = req.body.address;
  const type = req.body.type;


  
  


  if (!email || !password||!name||!state||!city||!pincode||!address) {
    res.status(400).json({ msg: 'Missing input' })
    return;
  }



  const NewUser = new Lab({
    name,
    email,
    password,
    city,
    state,
    pincode,
    address,
    type
    


  })
  NewUser.save()
  .then(result => {
    console.log("result");
    
  })
  .catch(err => {
    res.send(err);
  })
  res.send('Hello World!');
});



app.get('/signup/patient', (req, res) => {
  res.send('Hello World!');
});
app.post('/signup/patient',async (req,res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const age = req.body.age;
  const gender = req.body.gender;
  const bloodgroup = req.body.bloodgroup;
  const address = req.body.address;
  const type = req.body.type;
  const city = req.body.city;
  const state = req.body.state;

  


  if (!email || !password||!name||!age||!gender||!bloodgroup||!address ){
    res.status(400).json({ msg: 'Missing input' })
    return;
  }
  let alreadyexist = await User.findOne({ email: email });




  if (alreadyexist) {

    res.status(409).json({ msg: 'This email already exists' })
    return;
  }
  const NewUser = new User({
    name,
    email,
    password,
    age,
    gender,
    bloodgroup,
    address,

    city,
    pincode,
    state
    


  })
  NewUser.save()
  .then(result => {
    console.log("Sign up done");
    
  })
  .catch(err => {
    res.send(err);
  })




});



app.get('/user/myrequests', async (req, res) => {
  const userid = req.body.userid;
  const msg = req.body.msg;
  
  // console.log(userid + "userid");
  let usersubmission = await Request.find({userid : userid});

  
    
  
  
  if(!usersubmission){
    res.json({msg:"No user submissions found"});
  }
  
  res.json(
    
    usersubmission  )
  
});

app.post('/user/myrequests',(req,res) =>{
  res.send('Hello World!');
});



app.post('/user/newrequests',(req,res) =>{
  const title = req.body.title;
  const height = req.body.height;
  const weight= req.body.weight;
  const body= req.body.body;



  const NewUser = new Request({
    title,
    height,
    weight,
    body,


  })

  NewUser.save()
    .then(result => {
      console.log("Data input successfull");
      
    })
    .catch(err => {
      res.send(err);
    })



  // res.send('Hello World!');
});
app.get('/user/newrequests', (req, res) => {
  res.send('Hello World!');
});


app.post('/user/requestdetails',(req,res) =>{
  res.send('Hello World!');
});
app.get('/user/requestdetails', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
