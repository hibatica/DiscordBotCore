module.exports = {
	name: "help",
	description: "get bot help",
	usage: "`help`, `help <command>`",
	run: async function(client, message, args) {
    // if they send the help command with no arguments
    if(!args[0]) {
      let text = [];
      
      // get info for each command
      client.commands.forEach((command) => {
        let cmdText = `**${client.config.prefix}${command.name}**: ${command.description}`;
        // add command to list 
        text.push(cmdText);
      });
      
      // combine array of commands into string and add a new line between each
      let commands = text.join("\n");
      let credit = "Powered by github.com/hibatica/DiscordBotCore";
      
      client.functions.get("embed").run(client, message, {
        title: "Bot Help Page",
        author: message.author,
        text:commands,
        color: client.config.color.success
        // uncomment this to credit me :)
        //, footer: credit
      });
    } else {
      try {
        let cmd = client.commands.get(args[0]);
        client.functions.get("embed").run(client, message, {
          author: message.author,
          color: client.config.color.success,
          title: `Command: ${cmd.name} help`,
          text: `\`${cmd.description}\`\n\nUsage:\n${cmd.usage}`
        });
      } catch(err) {
        console.log(err);
        client.functions.get("error").run(client, message, `No command: ${args[1]}`);
      }
    }
	}
}
