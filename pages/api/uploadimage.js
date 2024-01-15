import connectDb from "@/middleware/mongoose"
// import Upload from "@/models/Upload";
import formidable from "formidable";
import path from "path";
import fs from 'fs/promises'


// //Multer setup
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         return cb(null, '/public/uploads')
//     },
//     filename: function (req, file, cb) {
//         // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         return cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })

// const upload = multer({ storage: storage })


// // Next.js API Route
// const apiRoute = nextConnect({
//     onerror(error, req, res) {
//         console.error("Error handling request:", error);
//         res.status(500).json({error: "Server Error"});
//     },
// })

// apiRoute.use(upload.single('myimage'));

export const config = {
    api: {
        bodyParser: false,
    },
};

const readFile = (req, saveLocally) => {
    const options = formidable.options = {

        if(saveLocally) {
            options.uploadDir = path.join(process.cwd(), "/public/uploads");
            options.filename = (name, ext, path, form) => {
                return Date.now().toString() + "_" + path.originalFilename;
            }
        }
        
    };

    const form = formidable(options);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err)
            resolve(fields, files)
        })
    })
}

const handler = async (req, res) => {
    console.log("req body =>", req.body.data)
    try {
        await fs.readdir(path.join(process.cwd() + "/public", "/uploads"))
    } catch (error) {
        await fs.mkdir(path.join(process.cwd() + "/public" + "/uploads"));
    }
    await readFile(req, true);
    res.json({ done: "ok" })
};



export default connectDb(handler);
