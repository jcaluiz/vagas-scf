const data =  require("./fakeData");

module.exports = function(req, res){
    try {
        const { name, job } =  req.body;
        
        const newUser = { id: data.length + 1, name, job };
    
        data.push(newUser);
        
        res.send(newUser);
    } catch(error) {
        res.status(500).json({ message: error });
    }

};