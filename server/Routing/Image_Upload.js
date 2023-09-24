const cloudinary = require('cloudinary').v2
const express = require('express')
const multer = require('multer')
const fs = require('fs')
const route = express.Router()
require('dotenv')

const storage = multer.memoryStorage();
const upload = multer({ storage });

route.post('/image_upload',upload.single('image'), async (request, response) => {
    console.log(request.file)
    fs.writeFileSync('./image.jpg',request.file.buffer)
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    })
    let path = "./image.jpg"
    cloudinary.uploader.upload(path,{
        folder: 'Event Banner'
    })
        .then((result) => {
            response.status(200).send({
                message: "success",
                result,
            });
        }).catch((error) => {
            response.status(500).send({
                message: "failure",
                error,
            });
        });
})

module.exports = route;