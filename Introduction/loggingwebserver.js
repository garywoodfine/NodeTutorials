var http = require('http');
var log4js = require('log4js');
log4js.configure({
    appenders:[
        {type:'console'},
        {type:'file', filename:'logs/error.log', category:'webserver'}

    ]
});
var logger = log4js.getLogger('webserver');

var server = http.createServer(function(req,res){
    logger.info(req.url);

    switch(req.url){
        case '/':
            res.write('Welcome to http node.js');
            break;
        case '/about':
            res.write('About us page');
            break;
        case '/contact':
            res.write('Contact us page');
            break;

        default:
            var routeNotFound = 'The following route was not found ';
            res.write('404 PAGE NOT FOUND');
            logger.error(routeNotFound.concat(req.url));
    }
    res.end();
});

server.listen(3939);
console.log('Server is running on port 3939');
