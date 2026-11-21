const BAD_WORDS = [

    "PROJECT",
    "OVERVIEW",
    "AMENITIES",
    "SPECIFICATIONS",
    "RUNNING",
    "INFORMATION",
    "OCCUPIED",
    "BLOCKS",
    "CONTACT",
    "ADDRESS",
    "WHATSAPP",
    "CALL",
    "LOCATION",
    "RERA",
    "PRICE",
    "MASTER",
    "PLAN"

];

function scoreProject(candidate) {

    let score = 0;

    const upper = candidate.toUpperCase();

    // Ideal length
    if (candidate.length >= 5 && candidate.length <= 40) {
        score += 10;
    }

    // Prefer ALL CAPS (titles/logos)
    if (candidate === candidate.toUpperCase()) {
        score += 5;
    }

    // Penalize section headings
    BAD_WORDS.forEach(word => {
        if (upper.includes(word)) {
            score -= 25;
        }
    });

    return score;
}

function getBestProject(candidates) {

    let best = "";
    let bestScore = -999;

    candidates.forEach(candidate => {

        const current = scoreProject(candidate);

        console.log("[PROJECT]", candidate, "=>", current);

        if (current > bestScore) {
            bestScore = current;
            best = candidate;
        }

    });

    return best;
}

module.exports = {
    getBestProject
};