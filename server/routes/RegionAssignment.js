const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {RegionAssignments} = require ("../models");
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');
 
router.get("/", async(req,res) =>{
    const listofregion =  await RegionAssignments.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofregion)
});
router.get("/getregion", async(req,res) =>{
    const listofregion =  await RegionAssignments.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofregion)
});


router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const region =  await RegionAssignments.findByPk(id)
    res.json(region)
});


router.post("/searchregion", async(req,res) =>{
    const {value} = req.body
    try {
        const region =  await RegionAssignments.findAll( {where: {
            regionAssignment: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(region)
        
    } catch (error) {
        console.log(error)
    }

});




router.post("/", async(req,res) =>{

    const data = req.body
    const {regionAssignment} = data
    try{

        const count = await RegionAssignments.findOne({
            where:{ 
                regionAssignment: regionAssignment
            }
        })

        if (count) res.json({error:"Region Assignment Already exist"})
        
        await RegionAssignments.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   

});

router.post("/update",validateToken, async(req,res) =>{
    const {id, regionAssignment} = req.body
    try{

        const count = await RegionAssignments.findOne({
            where:{ 
                regionAssignment: regionAssignment
            }
        })

        if (count) res.json({error:"Region Assignment Already exist"})

        await RegionAssignments.update({regionAssignment:regionAssignment},{
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
    await RegionAssignments.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});



module.exports = router;