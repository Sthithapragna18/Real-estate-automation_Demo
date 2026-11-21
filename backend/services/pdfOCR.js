const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const execAsync = promisify(exec);
const { extractImageText } = require("./imageOCR");

async function extractPdfText(pdfPath) {

    const outputDir = path.join(__dirname, "..", "temp");

    // ==========================================
    // Always start with a clean temp folder
    // ==========================================

    if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, {
            recursive: true,
            force: true
        });
    }

    fs.mkdirSync(outputDir, {
        recursive: true
    });

    const outputPrefix = path.join(outputDir, "page");

    try {

        console.log("📄 PDF Detected");

        console.log("📄 Converting PDF to Images...");
        console.time("⏱ PDF Conversion Time");

        const command = `pdftoppm -png "${pdfPath}" "${outputPrefix}"`;

        await execAsync(command);

        console.timeEnd("⏱ PDF Conversion Time");
        console.log("✅ PDF Converted Successfully");

        const files = fs.readdirSync(outputDir)
            .filter(file => file.endsWith(".png"))
            .sort();

        console.log(`📑 Total Pages Generated : ${files.length}`);

        if (files.length === 0) {
            throw new Error("No pages were generated from the PDF.");
        }

        let fullText = "";

        console.time("⏱ OCR Time");

        for (const file of files) {

            const pagePath = path.join(outputDir, file);

            console.log(`🖼 OCR Started : ${file}`);

            const pageText = await extractImageText(pagePath);

            console.log(`✅ OCR Completed : ${file}`);

            fullText += pageText + "\n";

        }

        console.timeEnd("⏱ OCR Time");

        console.log("✅ PDF OCR Finished");

        try {

            fs.rmSync(outputDir, {
                recursive: true,
                force: true
            });

            console.log("🧹 Temp Folder Cleaned");

        } catch (err) {

            console.log("Cleanup skipped:", err.message);

        }

        return fullText;

    } catch (err) {

        console.error("❌ PDF OCR Error:", err);
        throw err;

    }

}

module.exports = {
    extractPdfText
};