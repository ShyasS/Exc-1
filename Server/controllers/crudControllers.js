const asyncHandler = require('express-async-handler')
const Crud = require('../models/crudModels');

const getData = asyncHandler(async(req, res)=>{
    const crud = await Crud.find();
   res.json(crud)
})

const createData = asyncHandler(async(req, res)=>{
    const {task} = req.body;
    try{
    const createdata = await Crud.create({
        task
    })
    res.status(201).json(createdata)
    if(!task){
        res.status(404);
        res.json({message :"data requried"})
    }
}catch(err){
    console.log(err);
    res.status(404).json({message : err.message})
}
 })

 const getSingleData = asyncHandler(async(req, res)=>{
    const crud = await Crud.findById(req.params.id);
    if(!crud){
        res.status(404);
        res.json({message : "Data Not found"})
    }
   res.json(crud)
})

const updateData = asyncHandler(async(req, res)=>{
    const dataId = await Crud.findById(req.params.id)
    if(!dataId){
        res.status(400);
        res.json({message : "Data not Found"})
    }
    const UpdateData = await Crud.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.json(UpdateData)
 })

 const deleteData = asyncHandler(async(req, res)=>{
    const deleteData = await Crud.deleteOne({_id:req.params.id})
    res.json(deleteData)
 })

module.exports = {getData,createData,getSingleData,updateData,deleteData}