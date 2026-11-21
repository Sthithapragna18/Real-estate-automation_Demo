const extractProjectName = require("./extractors/projectExtractor");
const extractDeveloper = require("./extractors/developerExtractor");
const extractLocation = require("./extractors/locationExtractor");
const extractRera = require("./extractors/reraExtractor");
const extractPropertyTypes = require("./extractors/propertyTypeExtractor");
const extractAmenities = require("./extractors/amenitiesExtractor");
const extractPossession = require("./extractors/possessionExtractor");
const extractUnitSizes = require("./extractors/unitSizeExtractor");

function parseBrochure(text) {

    if (!text) {
        return {};
    }

    return {

        projectName: extractProjectName(text),

        developer: extractDeveloper(text),

        location: extractLocation(text),

        reraNumber: extractRera(text),

        propertyTypes: extractPropertyTypes(text),

        amenities: extractAmenities(text),

        possession: extractPossession(text),

        unitSizes: extractUnitSizes(text)

    };

}

module.exports = {
    parseBrochure
};