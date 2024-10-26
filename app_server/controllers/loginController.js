var db = require('../../db.json');
module.exports.loginGet = (req, res) => {
    res.render('login')
};

module.exports.loginPost = (req, res) => {
    for(var i = 0; i < db.length; ++i){
        if(db[i].username == req.body.username && db[i].password == req.body.password){
            res.render('userpage', {
                "username": req.body.username,
                "password": req.body.password
            });
        }
    }
    res.render('login');
    
};