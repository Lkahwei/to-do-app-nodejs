const express = require('express');

const taskRouter = require('./routes/taskRoutes');

const app = express();

// Logger middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json({limit: '10kb'}));
console.log(taskRouter);

app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})
app.use('/api/v1/tasks', taskRouter);

module.exports = app;