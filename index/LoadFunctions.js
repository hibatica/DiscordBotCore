const fs = require("fs");
const Discord = require("discord.js");

module.exports = async function(client) {
	client.functions = new Discord.Collection();
	const functionFiles = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
	for (const file of functionFiles) {
	  const func = require(`../functions/${file}`);
	  client.functions.set(func.name, func);
	}
	console.log("::loaded functions");
}
