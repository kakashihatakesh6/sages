import mongoose from 'mongoose';
const { Schema } = mongoose;

const UploadSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: {type: String},
    images: [{
        imageId: {type: String },
        image: {type:String}
    }],
    date: { type: String, default: Date() }
});

export default mongoose.models.Upload || mongoose.model("Upload", UploadSchema);