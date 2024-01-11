import mongoose from 'mongoose';
const { Schema } = mongoose;

const GallerySchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    images: [{
        imageId: {type: String },
        image: {type:String, required:true}
    }],
    date: { type: String, default: Date() }
});

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);