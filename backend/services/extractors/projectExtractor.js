const cleanText = require("../engine/textCleaner");
const splitLines = require("../engine/lineSplitter");
const generateCandidates = require("../engine/candidateGenerator");
const { getBestProject } = require("../engine/projectScorer");

function extractProjectName(text) {

    if (!text) return "";

    const clean = cleanText(text);

    const lines = splitLines(clean);

    // Project names are usually in the first 20 lines
    const firstLines = lines.slice(0, 20);

    const candidates = generateCandidates(firstLines);

    const filtered = candidates.filter(candidate => {

        const upper = candidate.toUpperCase();

        return !(
            upper.includes("CONTACT") ||
            upper.includes("ADDRESS") ||
            upper.includes("PHONE") ||
            upper.includes("EMAIL")
        );

    });

    return getBestProject(filtered);

}

module.exports = extractProjectName;