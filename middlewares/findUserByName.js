const removeAccentsMakeLower = require("./removeAccentsMakeLower");
const hyphenForSpaceMakeLower = require("./hyphenForSpaceMakeLower");

module.exports = (data, nameQuery) => data
    .find(({ name }) => removeAccentsMakeLower(name) === hyphenForSpaceMakeLower(nameQuery));