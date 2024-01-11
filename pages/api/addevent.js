import connectDb from "@/middleware/mongoose"
import Event from "@/models/Event";


const handler = async (req, res) => {
    if (req.method == "POST") {
        const {name, description, date, image } = req.body;
        // console.log("Faculty => ", req.body);
        const faculty = await Event.findOne({name: name});
        if (faculty) {
            res.status(500).json({success: false, message: "Event Already Exists"});
        }
        let newEvent = await new Event({ name, description, eventDate:date, image });

        await newEvent.save();
        res.status(200).json({success: true, message: "Event Registered Successfully!"});
    }
    else{
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}


export default connectDb(handler);
  