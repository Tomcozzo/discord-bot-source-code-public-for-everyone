const {Events} = require('discord.js');
const { settings, important } = require('../../config/config');

module.exports = {
  name: Events.MessageCreate,
  async execute(client, message ) {
    if(important.devmode && !important.devId.includes(message.author.id)) return;
    const prefix = settings.prefix;
    if(message.author.bot || !message.content.toLowerCase().startsWith(prefix)) return;

    const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);
    if(cmd.length === 0) return;

    const command = client.messageCmds.get(cmd.toLowerCase()) || client.messageCmds.find((c) => c.aliases?.includes(cmd.toLowerCase()));

    if(!command) return;
    
    try {
      command.execute(client, message, args);
    } catch (err) {
      console.log(err);
    }
  },
};