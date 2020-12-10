const Discord = require("discord.js");

module.exports = {
	name: "embed",
	run: async function(client, message, options) {
		let embed = new Discord.MessageEmbed();
		if(options.title) embed.setTitle(options.title);
		if(options.text) embed.setDescription(options.text);
		if(options.color) embed.setColor(options.color);
		if(options.footer) embed.setFooter(options.footer);
		if(options.author) embed.setAuthor(options.author.tag, options.author.avatarURL("ico"));

		message.channel.send(embed);
	}
}
