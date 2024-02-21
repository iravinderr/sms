const express = require('express');
const router = express.Router();

const {createAnn} = require('../controllers/announcements/createAnn');
const {getAnn} = require('../controllers/announcements/getAnn');


router.post('/createnew/create', createAnn);
router.get('/retrieve/:id', getAnn);

module.exports = router;