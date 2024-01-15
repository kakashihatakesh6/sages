import connectDb from "@/middleware/mongoose"
import Notice from "@/models/Notice";


const handler = async (req, res) => {
    if (req.method === "GET") {
        let NoticeList = await Notice.find();
        if (NoticeList) {
            res.status(200).json({success: true, NoticeList: NoticeList});
        }else{
            res.status(500).json({success: false, message: "Internal Server Errror"});
        }

    }else{
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export default connectDb(handler);