const data = require("./fakeData");
const hyphenForSpaceMakeLower = require("./utils/hyphenForSpaceMakeLower");
const removeAccentsMakeLower = require("./utils/removeAccentsMakeLower");
const {howManyTimesWasCalled} = require("./utils/howManyTimesWasCalled");
const HttpException = require("./middlewares/HttpException");

const getUser = (req, res, _next) => {
    try {
        const { name: nameQuery } = req.query;
        const hyphenForSpaceQuery = hyphenForSpaceMakeLower(nameQuery);
    
        const findUser = data.find(({ name }) => removeAccentsMakeLower(name) === hyphenForSpaceQuery);
    
        if (findUser) {
            howManyTimesWasCalled(hyphenForSpaceQuery);
            return res.status(200).json(findUser);
        }
        throw new HttpException(404, "Name not found")
    } catch(error) {
        res.status(error.status).json({message: error.message});
    }
};

const getUsers = (_req, res, _next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};