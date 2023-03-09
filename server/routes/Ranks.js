const express = require('express');
const router = express.Router(); 
const {Ranks} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');

 
router.get("/", async(req,res) =>{
    const listofrank =  await Ranks.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofrank)
});

router.get("/getrank", async(req,res) =>{
    const listofrank =  await Ranks.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofrank)
});


router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const rank =  await Ranks.findByPk(id)
    res.json(rank)
});

router.post("/searchrank", async(req,res) =>{
    const {value} = req.body
    try {
        const rank =  await Ranks.findAll( {where: {
            rank: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(rank)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", validateToken, async(req,res) =>{
    const data = req.body
    const {rank} = data
    try{

        const count = await Ranks.findOne({
            where:{ 
                rank: rank
            }
        })

        if (count) res.json({error:"Rank Already exist"})
        
        await Ranks.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   
    
});

router.post("/update", validateToken, async(req,res) =>{
    const {id, rank} = req.body

    try{
        const count = await Ranks.findOne({
            where:{ 
                rank: rank
            }
        })

        if (count) res.json({error:"Rank Already exist"})
        
        await Ranks.update({rank:rank},{
            where:{
                id:id
            }
        });
        res.json(rank);
    }
    catch(error){
        res.json(error);
    }
    

});

router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await Ranks.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});





module.exports = router;