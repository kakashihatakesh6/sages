import connectDb from "@/middleware/mongoose"
import Notice from "@/models/Notice";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const {noticeTitle, noticeLink} = req.body.data;

        let noticeItem = await Notice.find({noticeTitle: noticeTitle});
        if (noticeItem) {
            res.status(500).json({ success: false, message: "Internal Server Errror" });
        }
        let newNotice = await new Notice({noticeTitle, noticeLink});
        await newNotice.save();
        
        res.status(200).json({ success: true, message: "Notice Added Successfully!"})

    }else{
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export default connectDb(handler);