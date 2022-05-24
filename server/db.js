const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONDODBURI, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        })

        console.log('Successfully connected to the Lune database');

    } catch(err) {
        console.log(`Could not connect to database. Exiting with error: ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB;