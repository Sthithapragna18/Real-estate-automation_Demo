function extractUnitSizes(text) {

    if (!text) return [];

    const matches = text.match(/\d{3,5}\s*SFT/gi);

    return matches ? [...new Set(matches)] : [];
}

module.exports = extractUnitSizes;