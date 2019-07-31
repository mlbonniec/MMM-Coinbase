Module.register("MMM-Coinbase", {

	defaults: {
		apiKey: "",
		apiSecret: "",
		wallet: ["BTC"],
		icons: true,
		label: false
		// updateInterval: 1
	},

	getStyles: function () {
		return [this.file("css/styles.css")];
	},

	start: function () {
		this.icons = {
			"BTC": "bitcoin",
			"ETH": "ethereum"
		};
		this.balance = 0;
		this.currency = "";
		this.cryptoData = [];
	},

	getHeader: function() {
		return this.data.header + "<span class='right'>" + this.balance + " " + this.currency + "</span>";
	},

	getDom: function() {
		var elem = document.createElement("div");
		elem.id = "accountWrapper";
		var module = this;
		var config = this.config;
		var icons = this.icons;
		this.cryptoData.forEach(function (accts) {
			module.balance = module.balance + parseInt(accts.native_balance.amount);
			// check if currency is in config
			if (config.wallet.indexOf(accts.currency) > -1) {
				// add div ROW for currency
				var rowElement;
				rowElement = document.createElement("div");
				rowElement.className = "row";
				rowElement.id = accts.currency + "Counter";

				// Create column for icon if icons have been activated
				if (config.icons) {
					var columnIconElement = document.createElement("div");
					columnIconElement.className = "column icon";
					columnIconElement.innerHTML = "<i class='fa fa-" + icons[accts.currency] + "'></i>";
					rowElement.appendChild(columnIconElement);
				}

				if (config.label) {
					var columnCurrencyElement = document.createElement("div");
					columnCurrencyElement.className = "column";
					columnCurrencyElement.innerHTML = "<span>" + accts.currency + "</span>";
					rowElement.appendChild(columnCurrencyElement);
				}
				var columnAmountElement = document.createElement("div");
				columnAmountElement.className = "column";
				columnAmountElement.innerHTML = "<span>" + accts.balance.amount + "</span>";

				rowElement.appendChild(columnAmountElement);
				elem.appendChild(rowElement);
			}

		});
		return elem;
	},

	notificationReceived: function(notification, payload, sender) {
		switch(notification) {
		case "DOM_OBJECTS_CREATED":
			var timer = setInterval(()=>{
				this.sendSocketNotification("DO_YOUR_JOB", {"apiKey": this.config.apiKey, "apiSecret": this.config.apiSecret});
			}, 5000);
			break;
		}
	},

	socketNotificationReceived: function(notification, payload) {
		switch(notification) {
		case "I_DID":
			this.cryptoData = payload;
			this.currency = payload[0].native_balance.currency;
			this.updateDom();
			this.balance = 0;
			break;
		}
	},
});
