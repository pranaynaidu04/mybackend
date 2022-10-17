const day = new Date()
const date = day.getDate()
const month = day.getMonth()+1

console.log(date)
console.log(month)

const batchInfo = {
    name:"lithium",
    week : "w3d3",
    topic :"node.js modules"
}

function myBatchInfo(){
    console.log(`${batchInfo.name},${batchInfo.week},${batchInfo.topic}`)
}
myBatchInfo()

module.exports.curDate = date
module.exports.curMonth = month
module.exports.batchInfo = myBatchInfo