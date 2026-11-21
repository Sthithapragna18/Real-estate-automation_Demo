const cleanText = require("../engine/textCleaner");
const splitLines = require("../engine/lineSplitter");
const generateCandidates = require("../engine/candidateGenerator");
const { getBestCandidate } = require("../engine/candidateScorer");

function extractDeveloper(text) {

    if (!text) return "";

    // Clean OCR text
    const clean = cleanText(text);

    // Split into lines
    const lines = splitLines(clean);

    // We only need the first 25 lines.
    // Developer names almost always appear near the beginning.
    const firstLines = lines.slice(0, 25);

    // Generate candidate names
    const candidates = generateCandidates(firstLines);

    // Ignore obvious non-developer words
    const filtered = candidates.filter(candidate => {

        const upper = candidate.toUpperCase();

        return !(
            upper.includes("AVAILABLE") ||
            upper.includes("PROJECT") ||
            upper.includes("AMENITIES") ||
            upper.includes("SPECIFICATIONS") ||
            upper.includes("CONTACT") ||
            upper.includes("ADDRESS") ||
            upper.includes("CALL") ||
            upper.includes("WHATSAPP")
        );

    });

    // Get highest scoring candidate
    return getBestCandidate(filtered);

}

module.exports = extractDeveloper;