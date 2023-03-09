const express = require('express');
const router = express.Router(); 
const {Primary,Secondary,Tertiary} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');

 
router.post("/", async(req,res) =>{
    const {id} = req.body
    const primary = await Primary.findOne({
        where:{ 
            employee: id
        }
    })
    const secondary = await Secondary.findOne({
        where:{ 
            employee: id
        }
    })
    const tertiary = await Tertiary.findOne({
        where:{ 
            employee: id
        }
    })

    const data ={primary,secondary,tertiary};

    res.json(data);
});


router.post("/primary",  async(req,res) =>{
    let data = req.body
    const {id,school_name,address,year_completed,year_graduated} = data
    data ={...data,'employee':id}
    try{

        const ifUpdate = await Primary.findOne({
            where:{ 
                employee: id
            }
        })

        if (ifUpdate){
                    
            await Primary.update({
                school_name:school_name,
                address:address,
                year_completed:year_completed,
                year_graduated:year_graduated,

            },{
                where:{
                    employee:id
                }
            });
            res.json(data);

        }else{
            await Primary.create(data);
            res.json(data);
        }
    }catch(error) {
        res.json(error);
    }     
});
router.post("/secondary",  async(req,res) =>{
    let data = req.body
    const {id,school_name,address,year_completed,year_graduated} = data
    data ={...data,'employee':id}
    try{

        const ifUpdate = await Secondary.findOne({
            where:{ 
                employee: id
            }
        })

        if (ifUpdate){
                    
            await Secondary.update({
                school_name:school_name,
                address:address,
                year_completed:year_completed,
                year_graduated:year_graduated,

            },{
                where:{
                    employee:id
                }
            });
            res.json(data);

        }else{
            await Secondary.create(data);
            res.json(data);
        }
    }catch(error) {
        res.json(error);
    }     
});
router.post("/tertiary",  async(req,res) =>{
    let data = req.body
    const {id,school_name,address,year_completed,year_graduated} = data
    data ={...data,'employee':id}
    try{

        const ifUpdate = await Tertiary.findOne({
            where:{ 
                employee: id
            }
        })

        if (ifUpdate){
                    
            await Tertiary.update({
                school_name:school_name,
                address:address,
                year_completed:year_completed,
                year_graduated:year_graduated,
                course:course

            },{
                where:{
                    employee:id
                }
            });
            res.json(data);

        }else{
            await Tertiary.create(data);
            res.json(data);
        }
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


module.exports = router;