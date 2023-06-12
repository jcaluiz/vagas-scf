var data =  require("./fakeData");
const hyphenForSpaceMakeLower = require("./middlewares/hyphenForSpaceMakeLower");
const removeAccentsMakeLower = require("./middlewares/removeAccentsMakeLower");

module.exports = function(req, res) {
    const { name: nameQuery } = req.query;

    const hyphenForSpaceQuery = hyphenForSpaceMakeLower(nameQuery);

    const findUser = data.find(({ name }) => removeAccentsMakeLower(name) === hyphenForSpaceQuery);

    const indexToRemove = data.indexOf(findUser);

    if (indexToRemove > -1) data.splice(indexToRemove, 1);

    if (findUser) return res.send("success");
    res.status(404).json({message: "Name not found"});
};