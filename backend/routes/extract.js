const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({
    dest: "uploads/"
});

// Services
const OCR = require("../services/ocr.service");
const Parser = require("../services/parser.service");

// POST /extract
router.post("/", upload.single("brochure"), async (req, res) => {

    try {

        // Check if file exists
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: "No brochure uploaded."
            });
        }

        console.log("========================================");
        console.log("📄 Processing:", req.file.originalname);

        // OCR
        const text = await OCR.extractText(req.file);

        console.log("✅ OCR Completed");

        // Parse OCR Text
        const data = Parser.parseBrochure(text);

        console.log("✅ Parsing Completed");
        console.log(data);

        // Response
        res.json({
            success: true,
            data: data,
            rawText: text
        });

    } catch (err) {

        console.error("❌ ERROR:", err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;