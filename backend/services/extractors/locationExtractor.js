function extractLocation(text) {

    if (!text) return "";

    const clean = text.replace(/\s+/g, " ");

    // Common location patterns
    const patterns = [

        /Located\s+at\s+([A-Za-z ]+)/i,

        /Location\s*[:\-]?\s*([A-Za-z ]+)/i,

        /Near\s+([A-Za-z ]+)/i,

        /Address\s*[:\-]?\s*([A-Za-z0-9 ,\-]+)/i

    ];

    for (const pattern of patterns) {

        const match = clean.match(pattern);

        if (match) {
            return match[1].trim();
        }

    }

    // Generic fallback:
    // Look for words after '@'
    const atMatch = clean.match(/@\s*([A-Za-z ]+)/);

    if (atMatch) {
        return atMatch[1].trim();
    }

    return "";

}

module.exports = extractLocation;