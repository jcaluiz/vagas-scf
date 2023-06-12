const data =  require("./fakeData");
const HttpException = require("./middlewares/HttpException");

module.exports =  function(req, res) {
  try {
      const {id: idQuery} =  req.query;
      const { name, job } = req.body;

      if (!req.hasUpdatePermission) throw new HttpException(
        403,
        "Update permission denied!"
      );
  
      const userToUpdate = data.find(({id}) => id == idQuery);
  
      if (name !== undefined) userToUpdate.name = name;
      if (job !== undefined) userToUpdate.job = job;
  
      res.send(userToUpdate);
  } catch(error) {
    res.status(error.status).json({message: error.message});
  }

};