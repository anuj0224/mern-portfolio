const { Module } = require('module');
const mongoose= require('mongoose');

const introSchema = new mongoose.model("intros",{
    welcomeText : {
        type : String,
        required : true
    },
    firstName : {
        type :String,
        required:true
    },
    lastName :{
        type : String,
        required : true
    },
    caption : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required :true
    }
});

const aboutSchema = new mongoose.model("abouts",{
    imgURL :{
        type : String,
        required :true
    },
    description1:{
        type : String,
        required: true
    },
    description2:{
        type : String,
        required: true
    },
    skills : {
        type : Array,
        required : true
    }
});

const experienceSchema = new mongoose.model("experiences",{
    title:{
        type :String,
        required : true
    },
    period :{
        type : String,
        required : true
    },
    company :{
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }

});

const projectSchema = new mongoose.model("projects",{
    title:{
        type :String,
        required : true
    },
    caption : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    technologies : {
        type: Array,
        required : true 
    },
    description : {
        type : String,
        required : true
    }
});

const contactSchema = new mongoose.model("contacts",{
    name :{
        type : String,
        required : true
    },
    age :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobile :{
        type : String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    country :{
        type : String,
        required : true
    }
});


module.exports = {
    Intro :  introSchema,
    About : aboutSchema,
    Experience : experienceSchema,
    Project : projectSchema,
    Contact : contactSchema
};