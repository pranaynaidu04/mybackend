const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let id1 = req.body.author
    let authorId = await authorModel.find({_id:id1})
    let id2 = req.body.publisher
    let publisherId = await authorModel.find({_id:id2})
    if ((!id1) && (!id2))  {
        res.send({error:"author id And Publisher id is required"})
    } else if(!id1){
       res.send({error:"authorId is required"})
    }else if (authorId.length == 0) {
        res.send({msg:"Author not found"})
    } else if(!id2){
        res.send({error:"publisherId is required"})
    }else if(publisherId.length == 0){
        res.send({msg:"Publisher not found"})
    }else{
        let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}


const updatePrice  = async function (req, res) {
    let incresear = await authorModel.find({ratings:{$gt: 3.5} })
    let newincresear=[]
    for(i of incresear){
        abc=i._id

       let tosend= await bookModel.findOneAndUpdate(
            {author:abc},
            {$inc:{"price":10}},
            {new:true} 
        )
        newincresear.push(tosend)
       }
       res.send({mess:newincresear})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatePrice = updatePrice
