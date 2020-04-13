let bot
const { MessageEmbed } = require('discord.js')

module.exports = (channel) => {
  const embed = new MessageEmbed({ title: 'DiscLists Logger {ChannelCreate}' })
    .addFields([
      { name: 'channel', value: channel.name + ' (<#' + channel.id + '>, ' + channel.id + ')' },
      { name: 'category', value: channel.parent.name + ' (' + channel.parent.id + ')' },
      { name: 'position', value: channel.rawPosition },
      { name: 'type', value: channel.type },
      { name: 'time', value: channel.createdAt }
    ])
    .addField('Created Channel', channel.name)
    .setTimestamp(channel.createdAt)
  bot.channels.resolve('698918693991874570').send(embed)
}
// 저 잠시만 잠수 탈께요. okay

module.exports.regs = (b) => { bot = b }
