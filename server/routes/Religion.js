const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Religions} = require ("../models");
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');
 
 
router.get("/", async(req,res) =>{
    const listofreligion =  await Religions.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofreligion)
});

router.get("/getreligion", async(req,res) =>{
    const listofreligion =  await Religions.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofreligion)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const religion =  await Religions.findByPk(id)
    res.json(religion)
});

router.post("/searchreligion", async(req,res) =>{
    const {value} = req.body
    try {
        const religion =  await Religions.findAll( {where: {
            religion: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(religion)
        
    } catch (error) {
        console.log(error)
    }

});

router.post("/", async(req,res) =>{

    const data = req.body
    const {religion} = data
    try{

        const count = await Religions.findOne({
            where:{ 
                religion: religion
            }
        })

        if (count) res.json({error:"Religion Already exist"})
        
        await Religions.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   

});

router.post("/update",validateToken, async(req,res) =>{
    const {id, religion} = req.body
    try{

        const count = await Religions.findOne({
            where:{ 
                religion: religion
            }
        })

        if (count) res.json({error:"Religion Already exist"})

        await Religions.update({religion:religion},{
            where:{
                id:id
            }
        });
        res.json(regionAssignment);

       
    }catch(error) {
        res.json(error);
    }   

});



router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await Religions.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});




module.exports = router;