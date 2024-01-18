import mongoose from 'mongoose';
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  eventDate: {type: String, required: true},
  endDate: {type: String,},
  eventTime: {type: String,},
  image: {type: String},
  createdAt: {type: String, default: Date()}
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);