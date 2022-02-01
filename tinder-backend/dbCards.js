//this outlines the structure of the cards in the database => models and Schema
import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
})


// similar to sql where we have tables but in NOSQL we have collections > [documents] > collection(optional) > 
export default mongoose.model('cards', cardSchema)