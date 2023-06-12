const data = require("./fakeData");
const { username } = require("./middlewares/howManyTimesWasCalled");
const hyphenForSpaceMakeLower = require("./middlewares/hyphenForSpaceMakeLower");
const findUserByName = require("./middlewares/findUserByName");
const HttpException = require("./middlewares/HttpException");

module.exports = function(req, res){
    try {
        const { name: nameQuery } =  req.query;
        const name = hyphenForSpaceMakeLower(nameQuery);
        const findUser = findUserByName(data, nameQuery);
    
        if (!findUser) throw new HttpException(404, "User does not exist in the database!");    
        res.send(`Usuário ${name} foi lido ${username[name] || 0} vezes.`);
    } catch(error) {
        res.status(error.status).json({ message: error.message });
    }
    

};