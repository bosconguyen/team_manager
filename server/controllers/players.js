
var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    create: (req,res) => {
        console.log(req.body);
        console.log('create');
        var newPlayer = new Player(req.body);
        newPlayer.save((err, newPlayer)=>{
            if(err){
                console.log("bad");
                res.json(err);
            }else{
                console.log("saved")
                res.json(newPlayer);
            }
        })
    },
    //
    show: (req, res) => {
        Player.find({}, (err, data) => {
            if(err) {
                let errors = [];
                for (let i in err.errors) {
                    errors.push(err.errors[i].message);
                }
                return res.status(400).send(errors)
            } else {
                console.log('show data');
                console.log(data);
                return res.json(data);;
            }
        })
    },

    destroy: (req, res) => {
        console.log('hit delete');
        Player.remove({_id: req.params.id}, (err)=>{
            if(err) {
                console.log('delete error');
                res.json(err);
            }else{
                console.log('deleted a player');
                res.json("deleted a player");
            }
        })
    },

    play: (req, res) => {
        console.log(req.params.game_id);
          Player.findOne({_id: req.params.player_id}, (err, player) => {
              if(err) {
                  console.log('delete error');
                  res.json(err);
              }
              else {
                  if(req.params.game_id == 'game1') {
                      player.game1 = 'playing'
                  }
                  if(req.params.game_id == 'game2') {
                      player.game2 = 'playing'
                  }
                  if(req.params.game_id == 'game3') {
                      player.game3 = 'playing'
                  }
                  player.save( (err) => {
                      if(err) {
                          let errors = [];
                          for(let i in err.errors){
                            errors.push(err.errors[i].message);
                          }
                      return res.status(400).send(errors);
                      }
                      else {
                          return res.json(true);
                      }
                  })
              }
          })
        },
        unplay: (req, res) => {
              Player.findOne({_id: req.params.player_id}, (err, player) => {
                  if(err) {
                      console.log('delete error');
                      res.json(err);
                  }
                  else {
                      if(req.params.game_id == 'game1') {
                          player.game1 = 'notplaying'
                      }
                      if(req.params.game_id == 'game2') {
                          player.game2 = 'notplaying'
                      }
                      if(req.params.game_id == 'game3') {
                          player.game3 = 'notplaying'
                      }
                      player.save( (err) => {
                          if(err) {
                              let errors = [];
                              for(let i in err.errors){
                                errors.push(err.errors[i].message);
                              }
                          return res.status(400).send(errors);
                          }
                          else {
                              return res.json(true);
                          }
                      })
                  }
              })
            },
            undecided: (req, res) => {
                  Player.findOne({_id: req.params.player_id}, (err, player) => {
                      if(err) {
                          console.log('delete error');
                          res.json(err);
                      }
                      else {
                          if(req.params.game_id == 'game1') {
                              player.game1 = 'undecided'
                          }
                          if(req.params.game_id == 'game2') {
                              player.game2 = 'undecided'
                          }
                          if(req.params.game_id == 'game3') {
                              player.game3 = 'undecided'
                          }
                          player.save( (err) => {
                              if(err) {
                                  let errors = [];
                                  for(let i in err.errors){
                                    errors.push(err.errors[i].message);
                                  }
                              return res.status(400).send(errors);
                              }
                              else {
                                  return res.json(true);
                              }
                          })
                      }
                  })
                },
}
