const router = require('express').Router();
const {Intro,About, Experience,Project } = require('../models/portfoliomodel');
const {Contact} = require('../models/portfoliomodel');
const User = require('../models/usermodel');

//get all portfolio data
router.get('/get-portfolio-data', async(req,res)=>{
    try{
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const experiences = await Experience.find();
        const contacts = await Contact.find();
        res.status(200).send({
            intro : intros[0],
            about : abouts[0],
            contact : contacts[0],
            projects : projects,
            experiences : experiences
        })
    }
    catch(error){
        res.status(500).send(error);
    }
});

//update-intro
router.post('/update-intro', async(req,res)=>{
    try{
        const intro = await Intro.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new : true}
        );
        res.status(200).send({
            data : intro,
            success : true,
            message : "Intro Updated Successfully"
        })
    }catch(error){
        res.status(500).send(error);
    }
});


//update-about
router.post('/update-about', async(req,res)=>{
    try{
        const about = await About.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new : true}
        );
        res.status(200).send({
            data : about,
            success : true,
            message : "About Updated Successfully"
        })
    }catch(error){
        res.status(500).send(error);
    }
});


//add-experience
router.post('/add-experience', async(req,res)=>{
    try{
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added Successfully",
        });
    }catch(error){
        res.status(500).send(error);
    }
});

//update-experience
router.post('/update-experience', async(req,res)=>{
    try{
        const experience = await Experience.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new : true}
        );
        res.status(200).send({
            data : experience,
            success : true,
            message : "Experience Updated Successfully",
        })
    }catch(error){
        res.status(500).send(error);
    }
});

//delete-experience
router.post('/delete-experience', async(req,res)=>{
    try{
        const experience = await Experience.findOneAndDelete(
            {_id: req.body._id}
        );
        res.status(200).send({
            data : experience,
            success : true,
            message : "Experience Deleted Successfully",
        })
    }catch(error){
        res.status(500).send(error);
    }
});

//add-projects
router.post('/add-project', async(req,res)=>{
    try{
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added Successfully",
        });
    }catch(error){
        res.status(500).send(error);
    }
});

//update-project
router.post('/update-project', async(req,res)=>{
    try{
        const project = await Project.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new : true}
        );
        res.status(200).send({
            data : project,
            success : true,
            message : "Project Updated Successfully",
        })
    }catch(error){
        res.status(500).send(error);
    }
});

//delete-projects
router.post('/delete-project', async(req,res)=>{
    try{
        const project = await Project.findOneAndDelete(
            {_id: req.body._id}
        );
        res.status(200).send({
            data : project,
            success : true,
            message : "Project Deleted Successfully",
        })
    }catch(error){
        res.status(500).send(error);
    }
});

//update-contact
router.post('/update-contact', async(req,res)=>{
    try{
        const contact = await Contact.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new : true}
        );
        res.status(200).send({
            data : contact,
            success : true,
            message : "Contact Updated Successfully"
        })
    }catch(error){
        res.status(500).send(error);
    }
});

//login-admin
router.post('/admin-login', async(req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username , password: req.body.password });
        if(user){
            res.status(200).send({
                data: user,
                success : true,
                message : "Login Successful"
            });
        }else{
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid Username and Password"
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;