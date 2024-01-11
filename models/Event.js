import mongoose from 'mongoose';
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  eventDate: {type: String, required: true},
  image: {type: String},
  date: {type: String, default: Date()}
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);