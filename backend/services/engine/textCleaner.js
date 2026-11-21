function cleanText(text) {

    if (!text) return "";

    return text

        .replace(/\r/g, "")

        .replace(/\t/g, " ")

        .replace(/[ ]{2,}/g, " ")

        .replace(/\n{3,}/g, "\n\n")

        .trim();

}

module.exports = cleanText;