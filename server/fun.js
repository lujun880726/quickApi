exports.getLocalIP = function () {
    var tmpIP = '';
    var ifaces=require('os').networkInterfaces();  
    for (var dev in ifaces) {  
      var alias=0;  
      ifaces[dev].forEach(function(details){  
        if (details.family=='IPv4' && 'en2' == dev) {  
            tmpIP = details.address;
            return tmpIP;
        }  
        ++alias; 
        // 
      });  
    } 
    return tmpIP;
}

exports.getNowTime = function ()
{
    tmpDT = Date.parse(new Date()).toString();
    return tmpDT.substr(0,10);
}


//process CONSOLE lOG 
exports.processConsoleLog = function(logMsg)
{
	console.log('PID:['+ process.pid +  '];MSG:[' + logMsg + '];');
}

// sys log save in mongo
exports.sysLog = function()
{

}

// get request parameter
exports.getRequestP = function(keyName, pType)
{

}