# MMM-Coinbase
A module for Michael Teeuw's MagicMirror project that displays your crypto-currency Coinbase balance.  
The module is now compatible with all crypto-currencies available on Coinbase.
However, only Bitcoin and Ethereum icons are available. For the other crypto-currencies, the currency symbol is displayed. (e.g. LTC for Litecoin)

## How it works
After installing the module and configuring the Coinbase API with your account, the module displays your crypto-currency balance in real time. It is updated every 5 seconds.

## Screenshot
<p align="center">
  <img src="https://github.com/mlbonniec/MMM-Coinbase/blob/master/img/readme/MMM-Coinbase.png">
</p>

## Prerequisites
* MagicMirror2
* Node.js
* npm
* Coinbase account

## Installing
Installing the module is quite straight forward
### Step 1 - Install the module
```javascript
cd ~/MagicMirror/modules
git clone https://github.com/mlbonniec/MMM-Coinbase.git
cd MMM-Coinbase
npm install
```
### Step 2 - Create your coinbase API keys
|!["Step-1"](https://github.com/mlbonniec/MMM-Coinbase/blob/master/img/readme/Step-1.png "Step-1")|!["Step-2"](https://github.com/mlbonniec/MMM-Coinbase/blob/master/img/readme/Step-2.png "Step-2")|!["Step-3"](https://github.com/mlbonniec/MMM-Coinbase/blob/master/img/readme/Step-3.png "Step-3")|
|-------------|-------------|-------------|
|<p align="center">Go to API Access</p>|<p align="center">Click `+ New API Key`</p>|<p align="center">Check `BTC Wallet` (or `LTC Wallet`, `ETH` ...) and `wallet:accounts:read`</p>|

|!["Step-4"](https://github.com/mlbonniec/MMM-Coinbase/blob/master/img/readme/Step-4.png "Step-4")|!["Step-5"](https://github.com/mlbonniec/MMM-Coinbase/blob/master/img/readme/Step-5.png "Step-5")|
|-------------|-------------|
|<p align="center">Click `Create`</p>|<p align="center">Copy `API Key` and `API Secret Key`</p>|

### Step 3 - Add module to `~MagicMirror/config/config.js`
Add this configuration into `config.js` file's
```javascript
{
    module: "MMM-Coinbase",
    position: "top_left", // put it where you want it
    header: "Coinbase", // optional
        config: {
            apiKey: "YOUR API KEY", // the key previously copied
            apiSecret: "YOUR API SECRET KEY",
            wallet: ["BTC", "LTC"], // list of currencies to display
            icons: true, // currently only Ethereum and Bitcoin supported
            label: false  // shows currency labels (e.g. BTC, ETH and so on)
        }
}
```
## Updating
Go to the module’s folder inside MagicMirror modules folder and pull the latest version from GitHub and install:
```
git pull
npm install
```
## Configuring
Here is the configurable part of the module

|Option|Description|
|------|-----------|
|`apiKey`|API Key from Coinbase.<br><br>**Type:** `string` **REQUIRED**<br>**Example:**`1iO5VjY2bdC3HucJ`<br>**Default value:** none|
|`apiSecret`|API Secret Key from Coinbase.<br><br>**Type:** `string` **REQUIRED**<br>**Example:**`OwABcDaA5fxK3QTV3gjwvOk358juuXti`<br>**Default value:** none|

## Use
Now you can fully use MagicMirror and the MMM-Coinbase module to display your wallets ! Enjoy it well !

## Contributing
If you find any problems, bugs or have questions, please [open a GitHub issue](https://github.com/mlbonniec/MMM-Coinbase/issues) in this repository.

## Contributors
* [nabbl](https://github.com/nabbl) thank you for your great work!
