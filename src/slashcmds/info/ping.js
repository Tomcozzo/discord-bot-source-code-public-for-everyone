const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('replies with pong'),
	async execute(client, interaction) {
		await interaction.reply({
			content: 'PONG!',
			ephemeral: true
		});
	}
}