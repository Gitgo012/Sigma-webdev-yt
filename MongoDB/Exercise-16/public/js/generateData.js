const mongoose = require('mongoose');

const generateDataSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

const generateData = mongoose.model('Ex16', generateDataSchema);

module.exports = generateData;
