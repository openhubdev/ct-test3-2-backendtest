const mongoose = require('mongoose');
const { dbconnection } = require('./config')

module.exports = () => {
    mongoose.connect(dbconnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}