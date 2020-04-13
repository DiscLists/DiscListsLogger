let bot
const { MessageEmbed } = require('discord.js')

module.exports = (channel) => {
  const embed = new MessageEmbed({ title: 'DiscLists Logger {ChannelDelete}' })
    .addFields([
      { name: 'channel', value: channel.name + ' (<#' + channel.id + '>, ' + channel.id + ')' },
      { name: 'category', value: channel.parent.name + ' (' + channel.parent.id + ')' },
      { name: 'position', value: channel.rawPosition },
      { name: 'type', value: channel.type },
      { name: 'create time', value: channel.createdAt },
      { name: 'delete time', value: new Date() }
    ])
    .setTimestamp(new Date())
  bot.channels.resolve('698918693991874570').send(embed)
}

module.exports.regs = (b) => { bot = b }
