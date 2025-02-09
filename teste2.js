const data = require("./fakeData");
const HttpException = require("./middlewares/HttpException");

function validateUserInput(name, job) {
    if (!name) throw new HttpException(404, "Missing field name!");

    if (!job) throw new HttpException(404, "Missing field job!");

    if (name.length < 3) {
        throw new HttpException(400, "Name must be at least 3 characters long!");
    }
}

module.exports = function (req, res, _next) {
    try {
        const { name, job } = req.body;

        const newUser = { id: data.length + 1, name, job };

        validateUserInput(name, job)

        data.push(newUser);

        res.status(201).json(newUser);
    } catch (error) {
        res.status(error.status).json({ message: error.message });
    }

};