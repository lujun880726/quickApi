//global config
var globalInfo = require('./config/global.js');
//global function 
var fun = require('./fun.js');
var bootstrap = require('./lib/bootstrap.js');


var cluster = require('cluster');
var http = require('http');
var url = require("url");
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log('[master] ' + "start master...");

    for (var i = 0; i < numCPUs; i++) {
         cluster.fork();
    }

    cluster.on('listening', function (worker, address) {
         console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + fun.getLocalIP() + "");
    });

} else if (cluster.isWorker) {
    
    console.log('[worker] ' + "start worker ..." + cluster.worker.id);
    
    http.createServer(function (req, res) {

        bootstrap.run(req, res);

    }).listen(globalInfo.serverInfo.Port);
}
