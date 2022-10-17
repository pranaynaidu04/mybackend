const str = "   Hi, I'm Pranay and I'm happy to be part of FunctionUp   "

const trim = function(){
    console.log(str.trim())
}

const lower = function(){
    console.log(str.toLowerCase())
}

const upper = function(){
    console.log(str.toUpperCase())
}

trim()
lower()
upper()

module.exports.trimstr = trim
module.exports.lowerCaseStr = lower
module.exports.upperCaseStr = upper
