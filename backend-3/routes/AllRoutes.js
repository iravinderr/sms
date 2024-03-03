const express = require('express');
const router = express.Router();

// const {createAnn} = require('../controllers/announcements/createAnn');
// const {getAnn} = require('../controllers/announcements/getAnn');
const {imageUpload}=require("../controllers/ImageUpload");


// router.post('/createnew/create', createAnn);
// router.get('/retrieve/:id', getAnn);

router.post("/imageUpload",imageUpload);

module.exports = router;