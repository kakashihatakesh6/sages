import connectDb from "@/middleware/mongoose"
import User from "@/models/User";
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == "POST") {
        const {name, email, role, phone, password, gender, image } = req.body;
        console.log("req bod y => ", req.body);
        const user = await User.findOne({email: email});
        if (user) {
            res.status(500).json({success: false, message: "User Already Exists"});
        }
        const cipherText = CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString();
        const token = jwt.sign({ name: name, email: email }, process.env.JWT_KEY);
        let newUser = await new User({ name, email, role, gender, image, password: cipherText, phone });

        await newUser.save();
        res.status(200).json({success: true, message: "User Registered Successfully!", token: token});
    }
    else{
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}


export default connectDb(handler);
  