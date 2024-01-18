import connectDb from "@/middleware/mongoose"
import Event from "@/models/Event";


const handler = async (req, res) => {
    if (req.method == "POST") {
        const {name, description, category, date, endDate, eventTime, image} = req.body.data;
        const faculty = await Event.findOne({name: name});image
        if (faculty) {
            res.status(500).json({ success: false, message: "Event Already Exists" });
        }
        let newEvent = await new Event({ name, description, category, eventDate: date, endDate, eventTime, image });

        await newEvent.save();
        res.status(200).json({success: true, message: "Event Registered Successfully!"});
    }
    else{
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}


export default connectDb(handler);
  