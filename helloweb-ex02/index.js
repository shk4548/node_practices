const http = require('http');
const path = require('path');
const express = require('express');

const helloRouter = require('./routes/hello');  // routes js 파일 리콰이어드
const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

const { nextTick } = require('process');

const port = 9090;

// Application SetUp
const application = express()
    // 1. static resources
    .use(express.static(path.join(__dirname, "assets")))
    // 2. request body parser
    .use(express.urlencoded({extended: true}))    // application/x-www-form-urlencoded
    .use(express.json())        // application/json 
    // 3. view engine
    .set('views', path.join(__dirname,"views"))
    .set('view engine', 'ejs')
    // 4. request router
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter) // require('./routes/main) 과같은뜻 그러나 require = import 라고 강사님은 생각하심
    .use('/user', userRouter)
    .use('/hello', helloRouter); 

// Server SetUp
http
    .createServer(application)
    .on('listening', function(){
        console.log("http server runs on " + port)
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port)