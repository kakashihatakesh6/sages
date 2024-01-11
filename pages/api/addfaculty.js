import connectDb from "@/middleware/mongoose"
import Faculty from "@/models/Faculty";

const handler = async (req, res) => {
    if (req.method == "POST") {
        const {name, email, role, phone, gender, image } = req.body.data;
        const faculty = await Faculty.findOne({email: email});
        if (faculty) {
            res.status(500).json({success: false, message: "User Already Exists"});
        }
        let newFaculty = await new Faculty({ name, email, role, gender, phone, image });

        await newFaculty.save();
        res.status(200).json({success: true, message: "Faculty Registered Successfully!"});
    }
    else{
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}


export default connectDb(handler);
  