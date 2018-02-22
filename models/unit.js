var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
    altPrice: { type: Number, required: false },
	category: { type: String, required: true }
});

module.exports = mongoose.model('Unit', schema);
