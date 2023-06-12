var data =  require("./fakeData");
const findUserByName = require("./middlewares/findUserByName");

module.exports = function(req, res) {
    const { name: nameQuery } = req.query;

    const findUser = findUserByName(data, nameQuery);

    const indexToRemove = data.indexOf(findUser);

    if (indexToRemove > -1) data.splice(indexToRemove, 1);

    if (findUser) return res.send("success");
    res.status(404).json({message: "Name not found"});
};