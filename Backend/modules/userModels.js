import mongoose from "mongoose";

const userMovie = new mongoose.Schema({
    favhero: String,
    networth: String,
    field: String,
    city: String,
    Currentwork: String,
})


const userModels = mongoose.model("PGrental",userMovie)

export default userModels;