let bot
const { MessageEmbed } = require('discord.js')

/**
 * @param {import('discord.js').Message} msg
 */
module.exports = (msg) => {
  if (msg.author.id === bot.user.id) return

  const embed = new MessageEmbed()
    .setColor(0x000000)
    .setTitle('{Message Delete}')
    .setAuthor(msg.author.username, msg.author.avatarURL())
    .addFields([
      { name: 'author', value: msg.author.username + ' (<@' + msg.author.id + '>, ' + msg.author.id + ')' },
      { name: 'channel', value: msg.channel.name + ' (<#' + msg.channel.id + '>, ' + msg.channel.id + ')' },
      { name: 'message', value: 'words: ' + msg.content.split(' ').length + ', length: ' + msg.content.length + ', id: ' + msg.id },
      { name: 'created time', value: msg.createdAt },
      { name: 'deleted time', value: new Date() },
      { name: 'content', value: msg.content || 'null' }
    ])
    .setTimestamp(new Date())

  bot.channels.resolve('698912974215184464').send(embed)
}

module.exports.regs = (b) => { bot = b }
