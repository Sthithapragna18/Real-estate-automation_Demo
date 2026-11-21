function generateCandidates(lines) {

    const candidates = [];

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i];

        if (!line) continue;

        candidates.push(line);

        if (i + 1 < lines.length) {

            candidates.push(

                line + " " + lines[i + 1]

            );

        }

    }

    return [...new Set(candidates)];

}

module.exports = generateCandidates;