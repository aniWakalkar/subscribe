const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require('dotenv').config();

// Connect to DATABASE
const DATABASE_URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}/subscribers`;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()