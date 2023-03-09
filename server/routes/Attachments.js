const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const {Attachments,DocumentTypes} = require ("../models");


router.post("/attachments", async(req,res) =>{
    const data = req.body;
    const {id} = data;

    const attachments = await Attachments.findAll({
        where:{
            employee:id
        },include:[DocumentTypes]
    });
    res.json(attachments);
});




module.exports = router;