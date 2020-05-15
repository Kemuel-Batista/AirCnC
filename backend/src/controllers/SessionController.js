const User = require('../models/User')

module.exports = {
    async store(req, res){
        const { email, username, password } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email, username, password })
        }

        return res.json(user);
    }
}