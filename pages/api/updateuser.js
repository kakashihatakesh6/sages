import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {

    if (req.method == "POST") {
        let jwtToken = req.body.data.token;
        let user = jwt.verify(jwtToken, process.env.JWT_KEY);
        let dbuser = await User.findOneAndUpdate({email: user.email}, {name: req.body.data.FormData.name, address: req.body.data.FormData.address, role: req.body.data.FormData.role, image: req.body.data.FormData.image, phone: req.body.data.FormData.phone});
        const {name, email, role, image, address, phone} = dbuser;
        res.status(200).json({ name, email, role, image, address, phone });
    } 
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default connectDb(handler); 