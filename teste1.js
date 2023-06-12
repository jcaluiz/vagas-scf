const data = require("./fakeData");

const getUser = (req, res, _next) => {

    const { name: nameQuery } = req.query;
    // Deixar tudo minúsculo e tirar o hífen do 'name' e colocar espaços no lugar
    const hyphenForSpaceQuery = nameQuery.replace(/-/gm, " ").toLowerCase();

    const findUser = data.find(({ name }) => {
        // Tirar os acentos dos nomes do banco de dados e deixar tudo minúsculo
        const nameDBWithoutAccents = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
        return nameDBWithoutAccents === hyphenForSpaceQuery;
    });

    if (findUser) return res.status(200).json(findUser);
    res.status(404).json({message: "Name not found"});
};

const getUsers = (req, res, next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};