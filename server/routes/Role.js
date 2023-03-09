const express = require('express');
const router = express.Router(); 
const {Role} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware")

 
router.get("/", validateToken, async(req,res) =>{
    const listorole =  await Role.findAll()
    res.json(listorole)
});

router.post("/byId/", validateToken, async(req,res) =>{
    const id = req.params.id
    const role =  await Role.findByPk(id)
    res.json(role)
});

router.post("/searchrole", validateToken, async(req,res) =>{
    const {value} = req.body
    try {
        const role =  await Role.findAll( {where: {
            description: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(role)
        
    } catch (error) {
        console.log(error)
    }

});


// router.post("/", validateToken, async(req,res) =>{
//     const role = req.body
//     await Role.create(role);
//     res.json(role);
// });

// router.post("/update", async(req,res) =>{
//     const {id, rank} = req.body
//     await Ranks.update({rank:rank},{
//         where:{
//             id:id
//         }
//     });
//     res.json(rank);
// });






module.exports = router;