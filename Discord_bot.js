init: function() {
},

action: function(cache) {
	const data = cache.actions[cache.index];
	const type = parseInt(data.storage);
	const varName = this.evalMessage(data.varName, cache);
	const min = parseInt(this.evalMessage(data.min, cache));
	const max = parseInt(this.evalMessage(data.max, cache)) + 1;
	const finalVal = Math.floor(Math.random() * (max - min)) + min;
	this.storeValue(finalVal, type, varName, cache);
	this.callNextAction(cache);
},
