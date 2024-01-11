import connectDb from "@/middleware/mongoose"
import Gallery from "@/models/Gallery";

const handler = async (req, res) => {
    if (req.method === "GET") {
        let GalleryList = await Gallery.find();
        if (GalleryList) {
            res.status(200).json({success: true, GalleryList: GalleryList});
        }else{
            res.status(500).json({success: false, message: "Internal Server Errror"});
        }

    }else{
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export default connectDb(handler);