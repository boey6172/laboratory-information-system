const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Package} = require ("../models");
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');
 
router.get("/", async(req,res) =>{
    const listOfPackage =  await Package.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listOfPackage)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const package =  await Package.findByPk(id)
    res.json(package)
});

router.post("/searchpackage", async(req,res) =>{
    const {value} = req.body
    try {
        const package =  await Package.findAll( {where: {
            package_name: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(package)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", async(req,res) =>{

    const data = req.body
    const {package_name} = data
    try{

        const count = await Package.findOne({
            where:{ 
                package_name: package_name
            }
        })
        if (count) res.json({error:"Package Name Already exist"})
        
        await Package.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   

});

router.post("/update",validateToken, async(req,res) =>{
    const {id, package_name} = req.body
    try{

        const count = await Package.findOne({
            where:{ 
                package_name: package_name
            }
        })

        if (count) res.json({error:"Package Already exist"})

        await Package.update({package_name:package_name},{
            where:{
                id:id
            }
        });
        res.json(package_name);

       
    }catch(error) {
        res.json(error);
    }   

});



router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await Package.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});







module.exports = router;