import Discord from 'discord.js';

export default {
  name: 'freakout',
  description: "I'm no expert but...",
  args: false,
  usage: '',
  category: 'fun',
  execute(message: Discord.Message): void {
    const em = new Discord.RichEmbed();
    em.setImage('http://imgur.com/3KaQ8g8.jpg"');
    message.channel.send(em);
  },
};
