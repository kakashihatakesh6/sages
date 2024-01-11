import connectDb from "@/middleware/mongoose"
import Notice from "@/models/Notice";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const {noticeTitle, noticeLink} = req.body;
        console.log("noticeAPI =>", req.body)
        let NoticeItem= await Notice.find({noticeTitle: noticeTitle});
        if (NoticeItem) {
            res.status(500).json({ success: false, message: "Internal Server Errror" });
        }
        let newNotice = await new Notice({noticeTitle, noticeLink});
        await newNotice.save();
        res.status(200).json({success: true, message: "Notice added successfully!"});

    }else{
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export default connectDb(handler);