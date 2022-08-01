// To connect to the mongodb
const mongoose = require('mongoose');
const app = require('./app');

// Uncaught Exception
process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    // 0 stands for success, 1 stands for unhandled exception
    process.exit(1);
});

//Use this dotenv to read the env file and addd to process.env
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(( ) => {
    console.log('DB Connection Successful');

});


// process.env to access environment variables

const port = process.env.port || 3000;

// Server
app.listen(port, () => {
    console.log(`App listening on ${port}`);
});

// Unhandled RejectionError
process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    // 0 stands for success, 1 stands for unhandled exception
    // server.close(() => {
        process.exit(1);
    // })
});
