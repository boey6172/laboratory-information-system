const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {DocumentTypes} = require ("../models");
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');
 
router.get("/", async(req,res) =>{
    const listofdocumentType =  await DocumentTypes.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofdocumentType)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const documentType =  await DocumentTypes.findByPk(id)
    res.json(documentType)
});

router.post("/searchdocumenttype", async(req,res) =>{
    const {value} = req.body
    try {
        const docType =  await DocumentTypes.findAll( {where: {
            documentType: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(docType)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", async(req,res) =>{

    const data = req.body
    const {documentType} = data
    try{

        const count = await DocumentTypes.findOne({
            where:{ 
                documentType: documentType
            }
        })

        if (count) res.json({error:"Document Type Already exist"})
        
        await DocumentTypes.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   

});

router.post("/update",validateToken, async(req,res) =>{
    const {id, documentType} = req.body
    try{

        const count = await DocumentTypes.findOne({
            where:{ 
                documentType: documentType
            }
        })

        if (count) res.json({error:"Document Type Already exist"})

        await DocumentTypes.update({documentType:documentType},{
            where:{
                id:id
            }
        });
        res.json(documentType);

       
    }catch(error) {
        res.json(error);
    }   

});



router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await DocumentTypes.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});







module.exports = router;