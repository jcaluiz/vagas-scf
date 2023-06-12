const data =  require("./fakeData");
const HttpException = require("./middlewares/HttpException");
const findUserByName = require("./utils/findUserByName");

module.exports = function(req, res) {
    try {
        const { name: nameQuery } = req.query;
    
        if (!req.hasDeletePermission) throw new HttpException(
            403,
            "Delete permission denied!"
          );
    
        const findUser = findUserByName(data, nameQuery);
    
        const indexToRemove = data.indexOf(findUser);
    
        if (indexToRemove > -1) data.splice(indexToRemove, 1);
    
        if (findUser) return res.send("success");

        throw new HttpException(404, "Name not found");
    } catch(error) {
        res.status(error.status).json({message: error.message});
    }
};