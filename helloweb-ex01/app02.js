const http = require("http");
const fs = require('fs');

const port = 9090;
const server = http.createServer(function(req,resp){
    console.log(req.url);

    if(req.url === '/'){
        req.url = 'index.html';
    }

    fs.readFile(__dirname + '/public/'+ req.url ,function(error, data){   // callback , 파일을 넣음
        resp.writeHead(200, { // header
            'Content-Type': 'text/html'
        });
        resp.end(data); // body

    });

});

server.listen(9090, function(){
    console.log("http server running on" + port);
});