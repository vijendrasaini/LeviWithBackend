const express = require('express')
const app = express()

const mongodbConnect = require('./configs/db')

module.exports = ()=>{
    app.listen( 6666, async () => {
        try {
            await mongodbConnect()
            console.log("Server is running on the port 6666")
        } catch (error) {
            console.log({
                status : "connection failed",
                error_message : error.message
            })
        }
    })
}