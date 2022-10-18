let blockBuster = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
function movies(){
    return blockBuster
}
// console.log(movies())

// ------------------------------------------------------------------------------------------------------

function indexNumber(){
    let indexNumber = req.params.indexNumber
    if (indexNumber>blockBuster.length||indexNumber<0){
        res.send("Invalid index number")
    }
    res.send(blockBuster[indexNumber])
}

// --------------------------------------------------------------------------------------------------------

let classics = [ {
    "id": 1,
    "name": "The Shining"
    }, {
    "id": 2,
    "name": "Incendies"
    }, {
    "id": 3,
    "name": "Rang de Basanti"
    }, {
    "id": 4,
    "name": "Finding Nemo"
    }]

    function cult(){
        return classics
    }

    // -----------------------------------------------------------------------------

    function idValue(){
       let idValue = req.params.idValue
       if(idValue>classics.id.length||idValue<0){
          res.send("invalid id value")
       }
       res.send(classics[idValue])
    } 

    module.exports.hits = movies
    module.exports.indexNumber = indexNumber
    module.exports.feelGood = cult
    module.exports.idNo = idValue
