const { welcomeImage } = require('ultrax');
const {Events} = require('discord.js');

const canvas = require("canvas")




module.exports = {
  name: Events.GuildMemberAdd,
  async execute(client, message,  member, user, GuildMember ) {
  const bg = 'https://imgur.com/okIR1iY.png';
  const avatar = GuildMember.displayAvatarURL()({ format: "png" });
  const title = "welcome";
  const subtitle = GuildMember.tag;
  const footer = `Youre the ${GuildMember.guild.memberCount}th member`;
  const color = '#ffffff';
  const channel = GuildMember.guild.channels.cache.get('1074361710753878036')
  const options = {
    font: "sans-serif",
    attachmentName: `welcome-${member.id}`,
    title_fontSize: 80,
    subtitle_fontSize: 50,
    footer_fontSize: 30
  };

  const image = await welcomeImage(bg, avatar, title, subtitle, footer, color, options);

  channel.send({ files: [image] });
}
}