var fun = require('./../fun.js');
var fs = require('fs');


handleUrl = function(str)
{
	routeInfo = {
		controller : 'index',
		fun : 'index',
	};
	if (!str || str == '/' || str == '/index.html' || str == 'index.html') {
		return routeInfo;
	}
	urlArr = str.split('/');
	if (urlArr[1]) {
		routeInfo.controller = urlArr[1];
	}
	if (urlArr[2]){
		routeInfo.fun = urlArr[2];
	}
	return routeInfo;
}

function destruct()
{
	console.log('bootstrap destruct');
}


exports.run = function(req, res)
{
//	if (req.method !== "POST"){
	if (false){
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("invalid method " + req.method);
    } else {
		routeInfo = handleUrl(req.url);
		controllerFileFs = './controllers/'+routeInfo.controller + '.js';
		controllerFileRe = './../controllers/'+routeInfo.controller + '.js';
		fs.exists(controllerFileFs, function (exists) {
			if (exists) {

				controllerClass = require(controllerFileRe).Obj;
				
				controllerClass.req = req;

				funName = routeInfo.fun + 'Action';
				if (typeof(controllerClass[funName]) !=   'function'){
					// without function
					controllerClass.setResponseData(-1,'without function', 'controllerName : ' + routeInfo.controller + ';functionName : ' + routeInfo.fun);
				} else {

					controllerClass.init();
					
					controllerClass.beforeAction();
					
					controllerClass[funName]();
					
					controllerClass.afterAction();

				}
				
				responseData = controllerClass.getResponse();

				controllerClass.destruct();
				
			} else {
				controllerBaseClass = require('./../controllers/base.js').controllerBase;
				controllerBaseClass.setResponseData(-1,'without controller', 'controllerName : ' + routeInfo.controller + ';functionName : ' + routeInfo.fun);
				// without controller
				responseData = controllerBaseClass.getResponse();
			}

			res.end(responseData);
			destruct();
		});
	}
}