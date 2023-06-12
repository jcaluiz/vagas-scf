const data =  require("./fakeData");

module.exports =  function(req, res) {
  
    const {id: idQuery} =  req.query;
    const { name, job } = req.body;

    const userToUpdate = data.find(({id}) => id == idQuery);

    if (name !== undefined) userToUpdate.name = name;
    if (job !== undefined) userToUpdate.job = job;

    res.send(userToUpdate);

};