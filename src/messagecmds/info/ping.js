module.exports = {
    name: 'ping',
    aliases: ['ws'],
    description: 'Returns client websocket ping.',
    async execute(client, message, args) {
      message.reply({
        content: 'Pong!'
      });
    }
  }