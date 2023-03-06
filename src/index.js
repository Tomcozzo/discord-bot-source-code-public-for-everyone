const config = require("./config/config.json")


const Discord = require("discord.js")
const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"

]})

const prefix = "!"

client.on("messageCreate", message => {
    if(message.content === prefix + "help") {
        message.channel.send("this is coming soon!")
    }
})

client.login(" your token here ")