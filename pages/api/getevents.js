import connectDb from "@/middleware/mongoose"
import Event from "@/models/Event";

const handler = async (req, res) => {
    if (req.method === "GET") {
        let EventList = await Event.find();
        if (EventList) {
            res.status(200).json({success: true, EventList: EventList});
        }else{
            res.status(500).json({success: false, message: "Internal Server Errror"});
        }

    }else{
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export default connectDb(handler);