const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const table = new ascii('EVENTS');


const { blue } = require("colors")

module.exports = (client) => {
  readdirSync('./src/events/').forEach((dir) => {
    const eventFiles = readdirSync(`./src/events/${dir}`).filter((file) => file.endsWith('.js'));

    for(const file of eventFiles) {
      const event = require(`../../events/${dir}/${file}`);
      if(event.name) {
        table.addRow(event.name, 'ok');
        client.events.set(event.name, event);
        if(event.once) {
          client.once(event.name, (...args) => event.execute(client, ...args));
        } else {
          client.on(event.name, (...args) => event.execute(client, ...args));
        }
      } else {
        table.addRow(file, 'error');
      }
    }
  });
  console.log(table.toString().blue);
}