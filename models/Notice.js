import mongoose from 'mongoose';
const { Schema } = mongoose;

const NoticeSchema = new Schema({
  noticeTitle: {type: String, required: true, unique: true},
  noticeLink: {type: String, required: true},
  date: {type: String, default: Date()}
});

export default mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);