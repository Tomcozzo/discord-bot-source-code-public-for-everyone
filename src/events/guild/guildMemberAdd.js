const { welcomeImage } = require('ultrax');

client.on('guildMemberAdd', async member => {
  const bg = 'https://imgur.com/okIR1iY.png';
  const avatar = member.user.displayAvatarURL({ format: "png" });
  const title = "welcome";
  const subtitle = member.user.tag;
  const footer = `Youre the ${member.guild.memberCount}th member`;
  const color = '#ffffff';
  const channel = member.guild.channels.cache.get('716220553391767569')
  const options = {
    font: "sans-serif",
    attachmentName: `welcome-${member.id}`,
    title_fontSize: 80,
    subtitle_fontSize: 50,
    footer_fontSize: 30
  };

  const image = await welcomeImage(bg, avatar, title, subtitle, footer, color, options);

  channel.send({ files: [image] });
});