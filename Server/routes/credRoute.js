const express = require('express');
const router = express.Router();
const {getData,createData,getSingleData,updateData,deleteData} = require('../controllers/crudControllers')

router.route('/get').get(getData)
router.route('/post').post(createData)
router.route('/getData/:id').get(getSingleData)
router.route('/put/:id').put(updateData)
router.route('/delete/:id').delete(deleteData)

module.exports = router;