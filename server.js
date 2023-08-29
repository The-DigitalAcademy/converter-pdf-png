import express from "express";
import axios from "axios";
import { pdfToPng } from "pdf-to-png-converter";
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/converter/pdf-png", async (req, res) => {
  try {
    let imageDownloaded = null;
    if (req.body.hasOwnProperty("url") && Object.keys(req.body).length === 1) {
      imageDownloaded = await axios.get(req.body.url, {
        responseType: "arraybuffer",
      });
    } else {
      imageDownloaded = await axios.post(
        "https://f869-154-0-10-27.ngrok-free.app/api/report",
        req.body,
        { responseType: "arraybuffer" }
      );
    }
    

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

    const arr = new Uint8Array(pngPages[0].content);

    res.status(imageDownloaded.status).end(arr);
  } catch (error) {
    res.status(500).json({ error: "An error occurred - " + error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
