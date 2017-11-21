var Players = require('./../controllers/players.js');
var path = require('path');
var fs = require('fs');

module.exports = (app) => {
    app.post('/api/players', Players.create);
    app.get('/api/players', Players.show);
    app.delete('/api/players/:id', Players.destroy);
    app.get('/api/players/play/:game_id/:player_id', Players.play);
    app.get('/api/players/out/:game_id/:player_id', Players.unplay);
    app.get('/api/players/undecided/:game_id/:player_id', Players.undecided);
    app.all("*", function(req,res,next){
        res.sendFile('./../../public/dist/index.html');
    });

}
