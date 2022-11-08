const publisherModel = require("../models/publisherModel")

const createPublisher = async function(req,res){
    const publisher = req.body
    const publisherCreated = publisherModel.create(publisher)
    res.send({data:publisherCreated})
}


module.exports.createPublisher=createPublisher