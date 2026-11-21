function extractAmenities(text) {

    if (!text) return [];

    const keywords = [

        "Swimming Pool",
        "Clubhouse",
        "Gym",
        "Power Backup",
        "Security",
        "Fire Safety",
        "Indoor Games",
        "Outdoor Games",
        "Yoga",
        "Jogging Track",
        "Basketball",
        "Tennis",
        "Cricket",
        "Children Play Area",
        "Garden",
        "Landscaping"

    ];

    return keywords.filter(keyword =>
        text.toLowerCase().includes(keyword.toLowerCase())
    );
}

module.exports = extractAmenities;