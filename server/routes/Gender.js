const express = require('express');
const router = express.Router(); 
const {Gender} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware")

 
router.get("/", validateToken, async(req,res) =>{
    const listofGender =  await Gender.findAll()
    res.json(listofGender)
});

router.get("/getgenders", async(req,res) =>{
    const listofGender =  await Gender.findAll()
    res.json(listofGender)
});

router.post("/byId/", validateToken, async(req,res) =>{
    const id = req.params.id
    const gender =  await Gender.findByPk(id)
    res.json(gender)
});

router.post("/searchGender", validateToken, async(req,res) =>{
    const {value} = req.body
    try {
        const gender =  await Gender.findAll( {where: {
            description: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(gender)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", validateToken, async(req,res) =>{
    const gender = req.body
    await Gender.create(gender);
    res.json(gender);
});

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