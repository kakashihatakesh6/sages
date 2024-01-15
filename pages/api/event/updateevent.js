import connectDb from "@/middleware/mongoose";
import Event from "@/models/Event";

const handler = async (req, res) => {

    if (req.method == "POST") {
        let { eventId, UpdateFormData } = req.body.data;
        let event = await Event.find({_id: eventId})
        if (!event) {
            res.status(404).json({success: false, message: "Event Does not Exisit!"});
        }
        let newEvent = await Event.findOneAndUpdate(
            { _id: eventId },
            {
                name: UpdateFormData.name,
                description: UpdateFormData.description,
                date: UpdateFormData.date,
                image: UpdateFormData.image,
            });

        res.status(200).json({ success: true, newEvent: newEvent });
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default connectDb(handler); 