let bot
const { MessageEmbed } = require('discord.js')

module.exports = (oldMsg, newMsg) => {
  if (newMsg.author.id === bot.user.id) return

  const embed = new MessageEmbed({ title: 'DiscLists Logger {MessageUpdate}' })
    .addFields([
      { name: 'author', value: oldMsg.author.username + ' (<@' + oldMsg.author.id + '>, ' + oldMsg.author.id + ')' },
      { name: 'channel', value: oldMsg.channel.name + ' (<#' + oldMsg.channel.id + '>, ' + oldMsg.channel.id + ')' },
      { name: 'old message', value: 'words: ' + oldMsg.content.split(' ').length + ', length: ' + oldMsg.content.length + ', id: ' + oldMsg.id },
      { name: 'old time', value: oldMsg.createdAt },
      { name: 'old content', value: oldMsg.content || 'null' },
      { name: 'new message', value: 'words: ' + newMsg.content.split(' ').length + ', length: ' + newMsg.content.length + ', id: ' + newMsg.id },
      { name: 'new time', value: newMsg.createdAt },
      { name: 'new content', value: newMsg.content || 'null' }
    ])
    .setTimestamp(newMsg.createdAt)

  bot.channels.resolve('698912974215184464').send(embed)
}

module.exports.regs = (b) => { bot = b }
