const NodeHelper = require("node_helper");
const {Client} = require("coinbase");

module.exports = NodeHelper.create({
	start: () => {},
	socketNotificationReceived: function(notification, payload) {
		const client = new Client({apiKey: payload.apiKey, apiSecret: payload.apiSecret, strictSSL: false});
		switch(notification) {
			case "GET_ACCOUNTS":
				const helper = this;
				client.getAccounts({}, (err, accounts) => {
					if(err)
						throw err;

					helper.sendSocketNotification("ACCOUNTS", accounts.filter(a => payload.wallet.includes(a.currency)));
				});

				break;
			}
	},
});
