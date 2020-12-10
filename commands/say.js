module.exports = {
	name: "say",
	description: "make bot say something",
	usage: "`say <text to say>`",
	run: async function(client, message, args) {
		client.functions.get("embed").run(client, message, {
			title: "Say",
			author: message.author,
			color: client.config.color.success,
			text: args.join(" ")
		});
	}
}
