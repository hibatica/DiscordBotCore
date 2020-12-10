# DiscordBotCore
A simple, scalable discord.js bot core. Just download and add your commands.

DiscordBotCore will run right out of the box after creating your `secrets.json.template` file.

You can add `functions/`, `commands/` and `events` as you see fit. Make sure that for each, you follow the format of the default file(s) in said folder

For example: If you make a command, make sure you use the same format within the `say.js` file. If you want to add an event listener, use the same format as `message.js` and `ready.js`.

DiscordBotCore is designed to be simple and scalable in order to facilitate a small or massive discord bot. Enjoy!

## Starting Guide

Clone this repository

Install npm 

Open a terminal/command prompt in the repository folder that you cloned

run `npm i`; This will install the needed node.js packages

edit the `secrets.json.template` file. Input your bot's token and rename it to `secrets.json`

edit your bot prefix and change embed colors if you'd like in `config.json`

to start your bot, run `node .`

The rest is up to you!


Note: Not a requiremdnt (obviously), but if you'd like to, please credit my github in your help or bot info command :)
