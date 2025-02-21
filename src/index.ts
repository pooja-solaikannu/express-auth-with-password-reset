import express from 'express'

const app = express()

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Connected to server!!!"
    })
})

app.listen(3000)