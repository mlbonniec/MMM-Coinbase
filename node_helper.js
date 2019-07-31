var NodeHelper = require("node_helper");
var Client = require("coinbase").Client;

module.exports = NodeHelper.create({
	start: function() {},
	socketNotificationReceived: function(notification, payload) {
		var client = new Client({"apiKey": payload.apiKey, "apiSecret": payload.apiSecret});
		switch(notification) {
		case "DO_YOUR_JOB":
			var helper = this;
			client.getAccounts({}, function(err, accounts) {
				helper.sendSocketNotification("I_DID", accounts);
			});
			break;
		}
	},
});
