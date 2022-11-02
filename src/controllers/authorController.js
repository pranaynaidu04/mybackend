const authorDetails = require('../models/authorModel')
const bookModels = require('../models/bookModel')

const createAuthor = async function(req,res){
    const authorData = req.body
    const savedAuthData = await authorDetails.create(authorData)
    res.send({msg:savedAuthData})
}

const getAuthor = async function(req,res){
    const author = await authorDetails.findOne({author_name:"Chetan Bhagat"})
    const authorId = author.author_id
    const bookList = await bookModels.find({author_id:authorId})
    res.send({books:bookList})
}

const updatedPrice = async function(req,res){
    const bookDetails = await bookModels.findOneAndUpdate({bookName:"Two states"},{$set:{price:100}},{new:true})
    const authorId = bookDetails.author_id
    const authName = await authorDetails.find({author_id:authorId})
    res.send({authorName:authName,price:bookDetails.price})
}

/*const authorBooks =  async function(req,res)  {
const bookList = await bookModels.find({price:{$gte:50,$lte:100}}).select({author_id:1,name:1})
const authorIdList = bookList.map(book=>book.author_id)
const authorList = await authorDetails.find((author_id,{$in: authorIdList}))

bookList.forEach( book => {
    const authorIdOfBook = book.author_id
    const author = authorList.find( author => authorIdOfBook === author.author_id)
    book.author_id = author.name
})
res.send({bookList:bookList})

}*/


module.exports.createAuthor=createAuthor
module.exports.getAuthor=getAuthor
module.exports.updatedPrice=updatedPrice
// module.exports.authorBooks=authorBooks
