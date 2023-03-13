const config = require("./config/config.js")


const { GatewayIntentBits, Collection } = require("discord.js")


const Discord = require("discord.js")
const client = new Discord.Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.DirectMessages,
	],
});


client.events = new Collection();
client.messageCmds = new Collection();
client.slashCmds = new Collection();

module.exports = client;

[
    'events',
    'messagecommands',
    'slashcommands'
].forEach((file) => {
    require(`./functions/handlers/${file}`)(client)
})









client.login(config.bottoken.token).catch((err) => {
    console.log(`[CLIENT] - coud not log into the bot check your token and try again.\n${err}`);
  });