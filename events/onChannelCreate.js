let bot
const { MessageEmbed } = require('discord.js')

module.exports = (channel) => {
  const embed = new MessageEmbed({ title: 'DiscLists Logger {ChannelCreate}' })
    .addField('Created Channel', channel.name)
    .setTimestamp(channel.createdAt)
  bot.channels.resolve('698918693991874570').send(embed)
}

module.exports.regs = (b) => { bot = b }
