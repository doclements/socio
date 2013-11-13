(function () {

	// body...
	var a = require('./a');

	a.hmmm = function(){
		return 'new() in b';
	};
	
	module.exports = a;
})();