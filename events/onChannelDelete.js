let bot
const { MessageEmbed } = require('discord.js')

module.exports = (channel, Time) => {
  const embed = new MessageEmbed({ title: 'DiscLists Logger {ChannelDelete}' })
    .addField('Delete Channel', channel.name)
    .setTimestamp(Time.createdAt)
  bot.channels.resolve('698918693991874570').send(embed)
}

module.exports.regs = (b) => { bot = b }
