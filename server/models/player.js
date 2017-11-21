
var mongoose = require('mongoose');
var PlayerSchema = mongoose.Schema({
    name: {type: String, required: [true, "player name required"]},
    position: {type: String},
    game1: {type: String, 'default':'undecided'},
    game2: {type: String, 'default':'undecided'},
    game3: {type: String, 'default':'undecided'},

}, {timestamps: true});
mongoose.model('Player', PlayerSchema);
