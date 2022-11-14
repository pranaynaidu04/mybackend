let axios = require('axios')

// Q 1 -> WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date. This is a very basic assignment and totally along the lines of what we covered in the session.
// Solution ->

let getbyDistrictid = async function (req, res) {
    try {
        let disId = req.query.district_id
        let date = req.query.date
        // console.log(`query params are: ${disId} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${disId}&date=${date}`
        }

        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// <<<<<<----------------------------------------------------------->>>>>>>>


// Q 2 ->Get weather of London from  http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId> 
//then change the above to get the temperature only( of London 


let londonWether = async function (req, res) {
    try {
        let city = req.query.q
        let appCode = req.query.appid

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appCode}`
        }
        let result = await axios(options)
        // Get all weather details of london -        
        // res.status(200).send({ msg: result.data})
        // res.status(200).send({ msg:data })

        // Get only Temprature of London -       
        let temp = result.data.main.temp
        res.status(200).send({ msg: temp })

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message })
    }

}

// <<<<<<----------------------------------------------------------->>>>>>>>


// Q  - Sort the cities     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]   in order of their increasing temperature Result should look something like this.
// [
//     {city:"London", temp: 280},
//     {city:"Moscow", temp: 290},
//     {city:"Bangalore", temp: 301.2},
//     .......
//     ]

// Solution ->

let filtercites = async function (req, res) {
    try {

        let appCode = req.query.appid
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let temp = []
        for (let i of cities) {
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=${appCode}`
            }
            let result = await axios(options)
            temp.push({ city: i, temp: result.data.main.temp })
        }
        temp.sort((a,b) => a.temp - b.temp);
        res.status(200).send({ data :temp});

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message })
    }

}

// <<<<<<----------------------------------------------------------->>>>>>>>

// Q 4- 3. Axios POST request assignment Statement:
// Step1: Get all the memes at Postman (https://api.imgflip.com/get_memes)
// Step 2 : Pick a memeId you want (Eg 129242436) for the POST request (from the result from  above )
// Assignment: Create a Post request API (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below OR incase you find error in using this username password due to too many people trying to access it, then create your own account and plz do share username password on your group so that others can use it too- be kind and helpful):

//         <meme_id>    template_id
//            text0 <text you want as a caption>
//            text1 <optional>
//            username chewie12345
//            password meme@123

// Return a response with a body like this

//            "data": {
//                    "url": "https://i.imgflip.com/5mvxax.jpg",
//                    "page_url": "https://imgflip.com/i/5mvxax"
//                }

// Solution -

let memePost = async function (req, res) {
    //    181913649
    try {

        let tempId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let userN = req.query.username
        let password = req.query.password

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${tempId}&text0=${text0}&text1=${text1}&username=${userN}&password=${password}`
        }
        let result = await axios(options);
        res.status(200).send({ status: true, msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





module.exports.getbyDistrictid = getbyDistrictid
module.exports.londonWether = londonWether
module.exports.filtercites = filtercites
module.exports.memePost = memePost
