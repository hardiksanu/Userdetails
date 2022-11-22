//CREATE = POST method is used to create new resource   - /api/resource
//READ   = GET method is used to read operation       , - /api/resource
//UPDATE = PUT(Use for all)/PATCH(update only particular resource) method is used to update a resource -/api/resource
//DELETE = DELETE method is used to remove a resource.  - /api/resource
const { Router } = require("express");
const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
// we will handle post request
router.post('/mens', async (req, res) => {
        try{
                const addMensRecords = new MensRanking(req.body);
                console.log(req.body);

                const ranking_id = req.params.ranking;
                if (ranking_id == req.params.ranking) {
                              return res.status(409).send("Ranking id is already assign, Please assing different ranking_id.");
                    };
                const insertMens =  await addMensRecords.save();
                console.log("insert", insertMens);

                res.status(201).send(insertMens);
        }catch (e) {
                console.log(e);
                res.status(400).send(e);
        }
});
// we will handle get request
router.get('/mens', async (req, res) => {
        try {
                const getMens = await MensRanking.find({}).sort({ "ranking": 1 });  // it short ranking in asending order.
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(getMens);
        } catch (e) {
                res.status(400).send(e);
        }
});
// we will handle put req. with individual_id
router.put('/mens/:id', async (req, res) => {
        try {
                const _id = req.params.id;
                const getMen = await MensRanking.findById(_id);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(getMen);
        } catch (e) {
                res.status(500).send(e);
        }
});
// we will handle patch req. with individual_id
router.patch('/mens/:id', async (req, res) => {
        try {
                const _id = req.params.id;
                const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true });
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(getMen);
        } catch (e) {
                res.status(500).send(e);
        }
});
// we will handle delete request with individual_id
router.delete('/mens/:id', async (req, res) => {
        try {
                const getMen = await MensRanking.findByIdAndDelete(req.params.id);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(getMen);
        } catch (e) {
                res.status(500).send(e);
        }
});

module.exports = router;