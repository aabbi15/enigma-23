const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name:{
        type:String,
        required:true
        
    },
    email : {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    bloodgroup:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },

},{timestamps: true})

const HospitalSchema = new Schema({
    name:{
        type:String,
        required:true
        
    },
    email : {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    pincode:{
        type: Number,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },

},{timestamps: true})

const LabSchema = new Schema({
    name:{
        type:String,
        required:true
        
    },
    email : {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    pincode:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    

},{timestamps: true})

const RequestSchema = new Schema({
    title:{
        type:String,
        required:true
        
    },
    height : {
        type: Number,
        required:true
    },
    weight:{
        type: Number,
        required:true
    },
    body:{
        type: String,
        required:true
    },
    
    

},{timestamps: true})

const DoctorSchema = new Schema({
    first_name:{
        type:String,
        required:true
        
    },
    last_name : {
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    speciality:{
        type: String,
        required:true
    },
    education:{
        type: String,
        required:true
    },
    years_of_experience:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone_number:{
        type: Number,
        required:true
    },
    

},{timestamps: true})

const drassign = new Schema({
    firstname:{
        type:String,
        required:true
        
    },
    lastname : {
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    time:{
        type: String,
        required:true
    },
    modeofconsultation:{
        type: String,
        required:true
    },
    notes:{
        type: String,
        required:true
    },
    

},{timestamps: true})










const User = mongoose.model('User',UserSchema);
const Hospital = mongoose.model('Hospital',HospitalSchema);
const Lab = mongoose.model('Lab',LabSchema);
const Request = mongoose.model('Request',RequestSchema);
const Doctor = mongoose.model('Doctor',DoctorSchema);
const DrAssign=mongoose.model('DrAssign',DrAssignSchema);
module.exports = {User,Hospital,Lab,Request,Doctor,DrAssign};