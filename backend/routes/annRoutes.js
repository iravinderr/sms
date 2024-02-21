const express = require('express');
const router = express.Router();

const {createAnn} = require('../controllers/announcements/createAnn');


router.post('/createnew/create', createAnn);

module.exports = router;