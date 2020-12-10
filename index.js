const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();
const secrets = require("./secrets.json");
client.config = require("./config.json");

const indexFiles = fs.readdirSync("./index").filter(file => file.endsWith(".js"));
for (const file of indexFiles) {
  const script = require(`./index/${file}`);
  script(client);
}

client.login(secrets.botToken);
module.exports = client;
