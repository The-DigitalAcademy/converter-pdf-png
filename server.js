import express from "express";
import axios from "axios";
import { pdfToPng } from "pdf-to-png-converter";
import { fileURLToPath } from "url";
import path from "path";
import multer from "multer";
import dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ?? 3030;
const JSREPORT_URL = process.env.JSREPORT_URL ?? "http://localhost:5488/api/report";

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  // Render Index Page When Server is UP
  res.sendFile(__dirname + "/server.html");
});

app.post("/converter/pdf-png", upload.single('file'), async (req, res) => {
  try {
    // Fetch PDF from URL BODY or JS Reports
    let imageDownloaded = {data: null, status: 400};
    if (req.file) {
      imageDownloaded.data = req.file.buffer
    }
    else if (req.body.hasOwnProperty("url") && Object.keys(req.body).length === 1) {
      imageDownloaded = await axios.get(req.body.url, {
        responseType: "arraybuffer",
      });
    } else if (req.body.hasOwnProperty("template") && req.body.hasOwnProperty("data")){
      imageDownloaded = await axios.post(JSREPORT_URL, req.body, {
        responseType: "arraybuffer",
      });
    }
    else{
      return res.status(imageDownloaded.status).json({ error: "In Valid Request Body"})
    }

    // Convert PDF to PNG
    const pngPages = await pdfToPng(
      imageDownloaded.data, // The function accepts PDF file path or a Buffer
      {
        disableFontFace: true, // When `false`, fonts will be rendered using a built-in font renderer that constructs the glyphs with primitive path commands. Default value is true.
        useSystemFonts: false, // When `true`, fonts that aren't embedded in the PDF document will fallback to a system font. Default value is false.
        enableXfa: false, // Render Xfa forms if any. Default value is false.
        viewportScale: 1.0, // The desired scale of PNG viewport. Default value is 1.0.
        outputFileMask: "buffer", // Output filename mask. Default value is 'buffer'.
        pagesToProcess: [1], // Subset of pages to convert (first page = 1), other pages will be skipped if specified.
        strictPagesToProcess: false, // When `true`, will throw an error if specified page number in pagesToProcess is invalid, otherwise will skip invalid page. Default value is false.
        verbosityLevel: 0, // Verbosity level. ERRORS: 0, WARNINGS: 1, INFOS: 5. Default value is 0.
      }
    );

    // Convert Buffer to ByteArray
    const arr = new Uint8Array(pngPages[0].content);

    // Returns the Converted ByteArray
    res.status(200).end(arr);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred - " + error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
