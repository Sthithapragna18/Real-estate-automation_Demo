const Tesseract = require("tesseract.js");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function extractImageText(imagePath) {

    const processedImage = path.join(
        path.dirname(imagePath),
        "processed_" + Date.now() + ".png"
    );

    try {

        console.log("🖼 Processing Image...");

        await sharp(imagePath)
            .grayscale()
            .normalize()
            .sharpen()
            .png()
            .toFile(processedImage);

        console.log("✅ Image Enhanced");

        const result = await Tesseract.recognize(
            processedImage,
            "eng",
            {
                logger: m => {
                    if (m.status === "recognizing text") {
                        console.log(`OCR Progress: ${Math.round(m.progress * 100)}%`);
                    }
                }
            }
        );

        console.log("✅ OCR Finished");

        return result.data.text;

    } catch (err) {

        console.error("❌ Image OCR Error:", err);
        throw err;

    } finally {

        if (fs.existsSync(processedImage)) {
            fs.unlinkSync(processedImage);
        }

    }

}

module.exports = {
    extractImageText
};