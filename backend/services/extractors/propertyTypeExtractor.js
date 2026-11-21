function extractPropertyTypes(text) {

    const propertyTypes = [];

    if (!text) return propertyTypes;

    const matches = text.match(/\d+\s*BHK/gi);

    if (!matches) return propertyTypes;

    const unique = [...new Set(matches.map(x => x.toUpperCase()))];

    unique.forEach(type => {
        propertyTypes.push({
            type
        });
    });

    return propertyTypes;
}

module.exports = extractPropertyTypes;