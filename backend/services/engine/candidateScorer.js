const COMPANY_KEYWORDS = [

    "INFRA",
    "REALTY",
    "DEVELOPERS",
    "GROUP",
    "CONSTRUCTIONS",
    "PROPERTIES",
    "BUILDERS",
    "HOMES"

];

const BAD_WORDS = [

    "MIYAPUR",
    "HYDERABAD",
    "AVAILABLE",
    "PROJECT",
    "FLOOR",
    "PLAN",
    "ROAD",
    "BHK",
    "SFT",
    "CONTACT",
    "ADDRESS",
    "CALL",
    "WHATSAPP"

];

function score(candidate) {

    let score = 0;

    const upper = candidate.toUpperCase();

    COMPANY_KEYWORDS.forEach(word => {

        if (upper.includes(word)) {

            score += 20;

        }

    });

    BAD_WORDS.forEach(word => {

        if (upper.includes(word)) {

            score -= 15;

        }

    });

    // Ideal length
    if (candidate.length >= 5 && candidate.length <= 30) {

        score += 10;

    }

    // Prefer ALL CAPS (OCR usually outputs logos in caps)
    if (candidate === candidate.toUpperCase()) {

        score += 5;

    }

    return score;

}

function getBestCandidate(candidates) {

    let best = "";
    let bestScore = -999;

    candidates.forEach(candidate => {

        const current = score(candidate);

        console.log(candidate, "=>", current);

        if (current > bestScore) {

            bestScore = current;
            best = candidate;

        }

    });

    return best;

}

module.exports = {
    getBestCandidate
};