import mongoose from "mongoose";

const casesSchema = new mongoose.Schema({
  creationDate: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  genre: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  isEmailSent: {
    type: Boolean,
    default: false,
  },
});

const CasesModel = mongoose.model("Cases", casesSchema);

export { CasesModel };
