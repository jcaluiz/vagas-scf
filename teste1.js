const data = require("./fakeData");
const hyphenForSpaceMakeLower = require("./utils/hyphenForSpaceMakeLower");
const removeAccentsMakeLower = require("./utils/removeAccentsMakeLower");
const {howManyTimesWasCalled} = require("./utils/howManyTimesWasCalled");

const getUser = (req, res, _next) => {

    const { name: nameQuery } = req.query;
    const hyphenForSpaceQuery = hyphenForSpaceMakeLower(nameQuery);

    const findUser = data.find(({ name }) => removeAccentsMakeLower(name) === hyphenForSpaceQuery);

    if (findUser) {
        howManyTimesWasCalled(hyphenForSpaceQuery);
        return res.status(200).json(findUser);
    }
    res.status(404).json({message: "Name not found"});
};

const getUsers = (_req, res, _next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};