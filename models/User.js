import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  role: {type: String, required: true},
  image: {type: String,},
  gender: {type: String, required: true}, 
  password: {type: String, required: true}, 
  phone: {type: String, require: true},
  address: { type: String, default: '' },
  date: { type: String, default: Date()},
});

export default mongoose.models.User || mongoose.model("User", UserSchema);