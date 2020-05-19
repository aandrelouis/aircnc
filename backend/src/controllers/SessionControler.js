const User = require('../models/User');

//index retornar listagem de sessoes 
//show listar uma unica sessao
//store criar uma sessao
//update remover uma sessao

module.exports={
    async store(req, res) {
        const { email } = req.body;
    
        let user = await User.findOne({email:email});
        
        if(!user){
         user = await User.create({ email});
        }    
        return res.json(user);
    }

};