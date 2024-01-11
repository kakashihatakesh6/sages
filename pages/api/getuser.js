import connectDb from "@/middleware/mongoose"
import User from "@/models/User";
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {

    if (req.method === "POST") {
        const { token } = req.body.data;
        let user = jwt.verify(token, process.env.JWT_KEY);
        let dbuser = await User.findOne({email: user.email});
        if (dbuser) {
            res.status(200).json({success: true, user: dbuser});
        }else{
            res.status(500).json({success: false, message: "Internal Server Errror"});
        }

    }else{
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export default connectDb(handler);