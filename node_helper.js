var NodeHelper = require("node_helper");
var Client = require('coinbase').Client;

var bal;

module.exports = NodeHelper.create({
    start: function() {
        bal = 0;
    },
    socketNotificationReceived: function(notification, payload) {
        var client = new Client({'apiKey': payload.apiKey, 'apiSecret': payload.apiSecret});
        switch(notification) {
            case "DO_YOUR_JOB":
                client.getAccounts({}, function(err, accounts) {
                    bal = accounts[0].balance.amount;
                });
                this.sendSocketNotification("I_DID", bal)
            break
        }
    },
})
