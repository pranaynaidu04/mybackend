const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const hel = require('../util/helper')
const fotr = require('../validator/formatter.js')
const ldsh = require('../lodash')
//importing external package
const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.welcome())
    console.log("The value of the constant is ",xyz.myUrl)
    console.log("Current date ",hel.curDate())
    console.log("Current month ",hel.curMonth())
    console.log("Batch information ",hel.batchInfo())
    console.log("trimmed str ",fotr.trimstr())
    console.log("Lower case str ",fotr.lowerCaseStr())
    console.log("Upper case str ",fotr.upperCaseStr())
    console.log("modified array ",ldsh.chunkMonths())
    console.log("modified array of odd numbers: ",ldsh.oddNumber())
    console.log("union of unique numbers: ",ldsh.fiveArr())
    console.log("key value pairs ",ldsh.movieGenre())

    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

