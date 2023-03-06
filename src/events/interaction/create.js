const {Events} = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	async execute(client, interaction) {
		if(interaction.isChatInputCommand()) {
			const command = interaction.client.slashCmds.get(interaction.commandName);
			if(!command) return;
			try{
				command.execute(client, interaction);
			}catch(err) {
				console.error(err);
			}
		}
	}
}