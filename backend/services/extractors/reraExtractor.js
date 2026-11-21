function extractRera(text) {

    if (!text) return "";

    const patterns = [

        /P\d{11}/i,

        /PRM\/KA\/RERA\/\d+\/\d+/i,

        /RERA\s*No\.?\s*[:\-]?\s*([A-Za-z0-9\/\-]+)/i

    ];

    for (const pattern of patterns) {

        const match = text.match(pattern);

        if (!match) continue;

        return match[1] || match[0];

    }

    return "";

}

module.exports = extractRera;