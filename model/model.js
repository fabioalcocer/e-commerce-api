const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sizes: [String],
  category: String,
  price: Number,
  quantity: Number,
  imageSrc: String,
})

module.exports =
  mongoose.models.Data || mongoose.model('Data', dbSchema)
