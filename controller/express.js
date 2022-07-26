let express = require('express');
let app = express();

// compress responses
const compression = require('compression');
app.use(compression())

//Adding Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Body parser library
let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));// support json encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));


//CORS-POLICY
const cors = require('cors')
app.use(cors())

//Wearing Helmet!
const helmet = require('helmet');
app.use(helmet({
    contentSecurityPolicy: false,
}));


//Defining API routes
let {routesAPI} = require('../routes/routes_api');
app.use(routesAPI);

//Defining web routes
let {routesWeb} = require('../routes/routes_web');
app.use(routesWeb);
app.use("/dist", express.static(__dirname + '/../public/dist'));
app.use("/.well-known/pki-validation/", express.static(__dirname + '/../public/well-known'));

//Database Connection
let mongoose = require('mongoose');
mongoDBConnection();

async function mongoDBConnection() {
    /*mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);*/
    // mongoose.set('reconnectTries', 5);
    // mongoose.set('reconnectInterval', 5000);

    // let mongoDBConnectionURL = 'mongodb://134.209.151.227:27017/formsapp';
    let mongoDBConnectionURL = process.env.MONGODB_PATH || 'mongodb://localhost/mtm';
    await mongoose.connect(mongoDBConnectionURL, function (err) {
        if (err) {
            console.log("Database Connection - Failed!");
            console.log(err);
        } else {
            console.log("Database Connection - SUCCESS")
        }
    });
}

module.exports = {app, mongoose};
