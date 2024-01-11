import connectDb from "@/middleware/mongoose"
import Faculty from "@/models/Faculty";

const handler = async (req, res) => {
    if (req.method === "POST") {
        let facultyList = await Faculty.find();
        if (facultyList) {
            res.status(200).json({success: true, facultyList: facultyList});
        }else{
            res.status(500).json({success: false, message: "Internal Server Errror"});
        }

    }else{
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export default connectDb(handler);