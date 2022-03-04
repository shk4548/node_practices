const connect = require("connect");
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 9090;
const app = connect();

app.use(connectRoute(function(router){
    router.get("/", function(req,resp){ // 핸들러 -> req 와 resp 실행시킴
        resp.writeHead(200, { // header
            'Content-Type': 'text/html'
        });
        resp.end("<h1>Main</h1>"); // body
    });

    router.get("/user", function(req,resp){ // 핸들러 -> req 와 resp 실행시킴
        resp.writeHead(200, { // header
            'Content-Type': 'text/html'
        });
        resp.end("<h1>User</h1>"); // body 
    });
}));
app.use(serveStatic(__dirname + "/public"));

app.listen(9090, function(){
    console.log("http server running on" + port);
});	