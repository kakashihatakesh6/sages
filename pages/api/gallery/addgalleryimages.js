import connectDb from "@/middleware/mongoose"
import Gallery from "@/models/Gallery";

const generateId = () => {
    const imageId = `${Math.random() * Date.now()}`;
    return imageId;
}

const handler = async (req, res) => {
    
    if (req.method == "POST") {
        const { name, category, images } = req.body;
        const galleryImage = await Gallery.findOne({ name: name });
        if (galleryImage) {
            res.status(500).json({ success: false, message: "Image Already Exists" });
        }

        const newImage = await new Gallery({
            name,
            category,
            images: images.map((item, index) => {
                return {
                    imageId: generateId(),
                    image: item
                }
            })

        })
        await newImage.save();
        res.status(200).json({ success: true, message: "Images Uploaded Successfully!" });
    }
    else {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


export default connectDb(handler);
