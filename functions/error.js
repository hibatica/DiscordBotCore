const Discord = require("discord.js");

module.exports = {
	name: "error",
	run: async function(client, message, text) {
		let embed = new Discord.MessageEmbed();
		embed.setColor(client.config.color.error);
		if(!text) {
			embed.setDescription("An internal error ocurred");
			return(message.channel.send(embed));
		} else {
			embed.setDescription(text);
			return(message.channel.send(embed));
		}
	}
}
