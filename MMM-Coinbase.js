Module.register("MMM-Coinbase", {
    
    defaults: {
        apiKey: "",
        apiSecret: "",
        // updateInterval: 1
    },
    
    getStyles: function () {
        return [this.file('css/styles.css')];
    },

    start: function () {},
    
    getDom: function() {
        var element = document.createElement("div")
        element.id = "bitcoinWallet"
        element.innerHTML = "<i class='fa fa-bitcoin'></i> "
        var subElement = document.createElement("p")
        subElement.id = "bitcoinCounter"
        element.appendChild(subElement)
        return element
    },
      
    notificationReceived: function(notification, payload, sender) {
        switch(notification) {
            case "DOM_OBJECTS_CREATED":
                var timer = setInterval(()=>{
                    this.sendSocketNotification("DO_YOUR_JOB", {'apiKey': this.config.apiKey, 'apiSecret': this.config.apiSecret})
                }, 5000)
            break
        }
    },
      
    socketNotificationReceived: function(notification, payload) {
        switch(notification) {
            case "I_DID":
                var elem = document.getElementById("bitcoinCounter")
                elem.innerHTML = payload
            break
        }
    },
})
