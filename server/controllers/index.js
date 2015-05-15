var base = require('./base.js').controllerBase;
var globalInfo = require('./../config/global.js');


indexCrontroller = base;
indexCrontroller.checkLoginFlag = false;

indexCrontroller.indexAction = function()
{
	
	//console.log(base.abc);
	indexCrontroller.setResponseData(1,'成功',{ab:1,bc:2,c:3,d:{a:1}});
};


exports.Obj = indexCrontroller;