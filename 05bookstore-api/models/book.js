const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  titile: {
    type: String,
    required: true,
    trim: true,
    maxLength: [100, "title is too long"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
    maxLength: [100, "title is too long"],
    trim: true,
  },

 price: { type: Number, },
  genre: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model("book",newSchema)