let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistrictvaccine = async function (req, res) {
    try {
        let district = req.query.districtId
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getwheather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = {
                method: "get",
                url: "http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}}&appid=d0b6c61a63b95b402ddcb7d5e34760d3"
            }
            let result = await axios(options)
            console.log(result)
            res.status(200).send({ msg: result.data })
            obj.temp = res.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = function (a, b) { return a.temp - b.temp }
        res.status(200).send({ msg: sorted })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let meme = async function (req, res) {
    try {
       let memeId=req.query
       let text0=req.query
       let text1=req.query
        let options={
            method:"post",
            url:"https://api.imgflip.com/get_memes?template_Id=${memeId}&text0=${text0}&text1=${text1}&Username:saketkumar1&password:S@ket1990"}
        let result=await axios(options)  
        res.status(200).send({msg:result.data})
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictvaccine = getDistrictvaccine
module.exports.getwheather = getwheather
module.exports.meme=meme