import mongoose from 'mongoose';
const { Schema } = mongoose;

const FacultySchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  gender: {type: String, required: true},
  role: {type: String, required: true},
  phone: {type: String, required: true},
  image: {type: String},
  desc: {type: String},
  date: {type: String, default: Date()}
});

export default mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);