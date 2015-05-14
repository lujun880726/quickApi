base = {};
base.checkLoginFlag = true;
base.req = null;
base.pesponseData = null;
base.pesponseCode = null;
base.pesponseMsg  = null;

base.init = function(){
	console.log('bootstrap init');
};

base.beforeAction = function()
{
	console.log('bootstrap beforeFun');
}

base.afterAction = function()
{
	console.log('bootstrap afterAction');
}

/**
* data return information  &&  data type
* code 0 = su ,> 0 is logic err ,< 0 is system error ,1 is without login
* msg   code > 0 will have error message
*/
base.setResponseData= function(code,msg,data)
{
	base.pesponseData = data || '';
	base.pesponseCode = code;
	base.pesponseMsg = msg || '';

};

base.getResponse= function()
{
	resD = {
		code : base.pesponseCode,
		data : base.pesponseData,
		msg  : base.pesponseMsg,
	};

	return JSON.stringify(resD);
};

base.destruct = function() {

	console.log('controller base  destruct');

};

base.checkLogin = function()
{
	if (base.checkLoginFlag == true) {

	} else {

	}
};


exports.controllerBase  = base;