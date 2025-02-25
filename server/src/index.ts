import express from 'express'
import { UserModel, OPTStorageModel } from './db'

const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Connected to server!!!"
    })
})

app.post("/sign-up", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const newUser = await UserModel.create({
        username: username,
        email: email,
        password: password
    })

    if(!newUser) {
        res.status(500).json({
            message: "Could not register the user. Please try again later"
        })
        return
    }
    res.status(200).json({
        message: `${username} is successfully registered`
    })
})

app.post("/sign-in", async (req, res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const userFound = await UserModel.findOne({
        email: email,
        password: password
    })
    console.log(userFound)
    if (!userFound) {
        res.status(404).json({
            message: `${email} is not registered with our system. Please register to login`
        })
        return
    }

    res.json({
        message: `${username} successfully logged in`
    })
})

app.post("/generate-opt", async (req, res) => {

    const email = req.body.email;

    if(!email) {
        res.status(404).json({
            message: "Email is required"
        })
    }
    
    const userFound = await UserModel.findOne({
        email: email,
    })

    if(!userFound) {
        res.status(404).json({
            message: `${email} is not registered`
        })
    }

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 

    await OPTStorageModel.create({
        email: email,
        otp: otp
    })

    // print otp in console and return OTP sent message
    console.log(`${email} ==> ${otp}`)
    res.status(200).json({
        message: "OTP Sent!"
    })

})

app.post("/verify-otp", async (req, res) => {
    const email = req.body.email
    const otp = req.body.otp

    if(!email || !otp) {
        res.status(404).json({
            message: "Email and OTP is required"
        })
        return
    }

    const otpVerified = await OPTStorageModel.findOne({
        email: email,
        otp: otp
    })

    if(!otpVerified) {
        res.status(404).json({
            message: "OTP is invalid"
        })
        return
    }

    res.status(200).json({
        message: "OTP is verified"
    })
})

app.post("/update-password", async (req, res) => {

    const email = req.body.email
    const newPassword = req.body.newpassword

    if(!email || !newPassword) {
        res.status(403).json({
            message: "Email and New password is required"
        })
    }

    // zod based password syntax verification

    const userUpdated = await UserModel.findOneAndUpdate(
        {email: email},
        {$set: {password: newPassword}}
    )

    if(!userUpdated){
        res.status(500).json({
            message: `Could not update password for ${email}`
        })
        return
    }

    res.status(200).json({
        message: `Password updated sucessfully for ${email}`
    })
})

app.listen(3000)