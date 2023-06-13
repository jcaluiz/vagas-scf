const removeAccentsMakeLower = require("../utils/removeAccentsMakeLower");
const hyphenForSpaceMakeLower = require("../utils/hyphenForSpaceMakeLower");

module.exports = (data, nameQuery) => data
    .find(({ name }) => removeAccentsMakeLower(name) === hyphenForSpaceMakeLower(nameQuery));