const client = require("../index.js");

module.exports = {
  run: async function(message) {
    let prefix = client.config.prefix
    if(message.content.startsWith(prefix)) {
			let msgArray = message.content.slice(1).split(" ");
			let cmd = msgArray[0];
			let args = msgArray.slice(1);

			if(client.commands.get(cmd)) {
				try {
					client.commands.get(cmd).run(client, message, args);
				} catch(err) {
					console.log(err);
					client.functions.get("error").run(message);
				}
			}
		}
  }
}