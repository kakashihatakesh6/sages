import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {

    if (req.method == "POST") {
        let jwtToken = req.body.data.token;
        let jwtUser = jwt.verify(jwtToken, process.env.JWT_KEY);
        let user = await User.findOne({email: jwtUser.email});

        var bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

        if ((decryptedPass === req.body.data.FormPass.password) && (req.body.data.FormPass.npassword === req.body.data.FormPass.cnpassword)) {
            await User.findOneAndUpdate({email: user.email}, { password: CryptoJS.AES.encrypt(req.body.data.FormPass.npassword, process.env.AES_SECRET).toString() })
            res.status(200).json({ success: true });
        }
        else{
            res.status(400).json({success: false})
        }
    } 
    else {
        res.status(400).json({ error: "Internal server error" });
    }
}

export default connectDb(handler); 