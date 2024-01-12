import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            try {
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
                let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
                if ((user.email === email) && (decryptedPass === password)) {
                    const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_KEY, { expiresIn: "2d" })
                    res.status(200).json({ success: true, token: token });
                } else {
                    res.status(500).json({ success: false, message: "Internal Server Error" });
                }
            } catch (error) {
                res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        } else {
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
}

export default connectDb(handler);