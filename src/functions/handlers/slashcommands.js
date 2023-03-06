const { Routes, REST, Guild } = require('discord.js');
const { readdirSync } = require('fs');
const { settings, bottoken, important } = require('../../config/config');
const ascii = require('ascii-table');
const table = new ascii('SLASHCMDS');

const { blue } = require("colors")

module.exports = (client) => {
	const commands = [];

	readdirSync('./src/slashcmds/').forEach((folder) => {
		const commandFiles = readdirSync(`./src/slashcmds/${folder}`).	filter((file) => file.endsWith('.js'));
		for(const file of commandFiles) {
			const command = require(`../../slashcmds/${folder}/${file}`);
			if(command && 'data' in command && 'execute' in command) {
				client.slashCmds.set(command.data.name, command);
				commands.push(command.data.toJSON());
				table.addRow(command.data.name, 'ok');
			} else {
				table.addRow(file, 'error');
				console.log('[CLIENT] - could not load slash command in ' + file);
				continue;
			}
		}
	});

	console.log(table.toString().blue)

	const token = bottoken.token
	const clientId = important.clientId
	const guildId = important.guildId

	const rest = new REST({version: '10'}).setToken(token);

	(async () => {
		try{
			//this is to register slash commands only in your server
			const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands});

			//and if u want to register commands globally
			 //const data = await rest.put(Routes.applicationCommands(id), {body: commands});
			
		} catch(err) {
			console.error(err);
		}
	})();
}