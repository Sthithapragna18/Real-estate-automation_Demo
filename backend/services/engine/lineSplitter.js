function splitLines(text) {

    if (!text) return [];

    return text

        .split("\n")

        .map(line => line.trim())

        .filter(line => line.length > 2);

}

module.exports = splitLines;