
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our db's data structure
const DataSchema = new Schema(
    {
        id: Number,
        message: String
    },
    { timestamps: true }
); 

// export the new schema so we can modify it with nodejs
module.exports = mongoose.model('Data', DataSchema);