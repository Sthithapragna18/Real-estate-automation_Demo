const { extractImageText } = require("./imageOCR");
const { extractPdfText } = require("./pdfOCR");

async function extractText(file) {

    if (!file) {
        throw new Error("No file received.");
    }

    console.log("==========================================");
    console.log("📄 Original File :", file.originalname);
    console.log("📂 Uploaded Path :", file.path);
    console.log("📌 MIME Type     :", file.mimetype);

    switch (file.mimetype) {

        case "image/png":
        case "image/jpeg":
        case "image/jpg":
        case "image/webp":

            console.log("🖼 Image File Detected");

            return await extractImageText(file.path);

        case "application/pdf":

            console.log("📕 PDF File Detected");

            return await extractPdfText(file.path);

        default:

            throw new Error(
                `Unsupported file type: ${file.mimetype}`
            );

    }

}

module.exports = {
    extractText
};