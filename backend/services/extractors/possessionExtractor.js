function extractPossession(text) {

    if (!text) return "";

    const match = text.match(/20\d{2}/);

    return match ? match[0] : "";
}

module.exports = extractPossession;
