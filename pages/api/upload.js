// pages/api/upload.js
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error parsing form data' });
      return;
    }

    // Process the uploaded file (e.g., save it to the server)
    const uploadedFile = files.file;
    console.log('File received:', uploadedFile.name);

    // Your file handling logic goes here

    res.status(200).json({ success: true });
  });
}
