const {readdirSync} = require('fs');
const ascii = require('ascii-table');
const table = new ascii('MSGCMDS');

const { blue } = require("colors")

module.exports = (client) => {
  readdirSync('./src/messagecmds/').forEach((dir) => {
    const commandFiles = readdirSync(`./src/messagecmds/${dir}`).filter((file) => file.endsWith('.js'));

    for(const file of commandFiles) {
      const command = require(`../../messagecmds/${dir}/${file}`);
      if(command.name) {
        table.addRow(command.name, 'ok');
        client.messageCmds.set(command.name, command);
      } else {
        table.addRow(file, 'error');
      }
    }
  });
  console.log(table.toString().blue);
}