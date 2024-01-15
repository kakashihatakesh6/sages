import connectDb from "@/middleware/mongoose"
import User from "@/models/User";

const handler = async (req, res) => {
    if (req.method === "POST") {
        let UsersList = await User.find();
        if (UsersList) {
            res.status(200).json({success: true, UsersList: UsersList});
        }else{
            res.status(500).json({success: false, message: "Internal Server Errror"});
        }

    }else{
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export default connectDb(handler);