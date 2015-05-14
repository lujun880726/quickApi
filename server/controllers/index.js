var base = require('./base.js').controllerBase;
var globalInfo = require('./../config/global.js');


indexCrontroller = base;
indexCrontroller.checkLoginFlag = false;

indexCrontroller.indexAction = function()
{
	console.log(globalInfo.Port);
	//console.log(base.abc);
	indexCrontroller.setResponseData(111111,1232,12312);
};


exports.Obj = indexCrontroller;