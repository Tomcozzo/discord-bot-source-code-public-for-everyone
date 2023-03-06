const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('help')
	.setDescription('replies with the help part'),
	async execute(client, interaction) {
		await interaction.reply({
			content: 'coming soon!',
			ephemeral: true
		});
	}
}