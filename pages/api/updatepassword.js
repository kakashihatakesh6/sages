import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {

    if (req.method == "POST") {
        let jwtToken = req.body.token;
        let jwtUser = jwt.verify(jwtToken, process.env.JWT_KEY);
        let user = await User.findOne({email: jwtUser.email});
        var bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        console.log("Password => ", decryptedPass);
        console.log("cnPass => ", req.body.FormPass.cnpassword);

        if ((decryptedPass === req.body.FormPass.password) && (req.body.FormPass.npassword === req.body.FormPass.cnpassword)) {
            await User.findOneAndUpdate({email: user.email}, { password: CryptoJS.AES.encrypt(req.body.FormPass.npassword, process.env.AES_SECRET).toString() })
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