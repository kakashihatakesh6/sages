import connectDb from "@/middleware/mongoose"
import Event from "@/models/Event";


const handler = async (req, res) => {
    if (req.method == "POST") {
        const { eventId } = req.body.data;
        const event = await Event.findOne({_id: eventId});
        if (!event) {
            res.status(404).json({ success: false, message: "Event Does not Exists" });
        }
        await Event.findByIdAndDelete({_id: eventId})
        let newEventList = await Event.find();
        res.status(200).json({success: true, newEventList: newEventList});
    }
    else{
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}


export default connectDb(handler);
  