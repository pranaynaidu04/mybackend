const _ =require('lodash')

const months = ["January","February","March","April","May","June","july","August","September","October","November","December"]
console.log(_.chunk(months, 4));

const odd = [1,3,5,7,9,11,13,15,17,19]
console.log(_.tail(odd))

const arr1 = [2,4,6,8,10]
const arr2 = [14,8,5,1,7]
const arr3 = [1,3,5,7,9]
const arr4 = [0,2,3,5,7,]
const arr5 = [11,15,10,14,0]
console.log(_.union(arr1,arr2,arr3,arr4,arr5))

const genre = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

console.log(_.fromPairs(genre));

module.exports.chunkMonths = months
module.exports.oddNumber = odd
module.exports.fiveArr = arr1,arr2,arr3,arr4,arr5
module.exports.movieGenre = genre
