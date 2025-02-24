import mongoose, { Schema, SchemaType, model } from "mongoose";

mongoose.connect("mongodb+srv://poojasolai97:osEioVLSYeAhsPiL@cluster0.fkiki.mongodb.net/login-system")

const UserSchema = new Schema({
    username: { type: Schema.Types.String, required: true, unique: true },
    email: { type: Schema.Types.String, required: true, unique: true },
    password: { type: Schema.Types.String, required: true, unique: true }
})

const OTPStorageSchema = new Schema({
    email: { type: Schema.Types.String, required: true },
    otp: { type: Schema.Types.String, required: true }
})


export const UserModel = model("users", UserSchema)
export const OPTStorageModel = model("opt-storage", OTPStorageSchema)




