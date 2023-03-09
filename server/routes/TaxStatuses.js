const express = require('express');
const router = express.Router(); 
const {TaxStatuses} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware")

 
router.get("/", async(req,res) =>{
    const listofTax =  await TaxStatuses.findAll()
    res.json(listofTax)
});

router.get("/getTaxStat", async(req,res) =>{
    const listofTax =  await TaxStatuses.findAll()
    res.json(listofTax)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const taxStat =  await TaxStatuses.findByPk(id)
    res.json(taxStat)
});

router.post("/searchrank", async(req,res) =>{
    const {value} = req.body
    try {
        const taxstat =  await TaxStatuses.findAll( {where: {
            description: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(taxstat)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", validateToken, async(req,res) =>{
    const description = req.body
    await TaxStatuses.create(description);
    res.json(description);
});

router.post("/update", async(req,res) =>{
    const {id, description} = req.body
    await TaxStatuses.update({description:description},{
        where:{
            id:id
        }
    });
    res.json(description);
});







module.exports = router;