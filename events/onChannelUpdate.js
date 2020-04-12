let bot
const { MessageEmbed } = require('discord.js')

module.exports = (oldchannel, newchannel, Time) => {
  const old = oldchannel.name
  const news = newchannel.name

  const exclude = ['696580617575596132', '696581761835991051', '696581784108007474']
  if (exclude.includes(newchannel.id)) return

  const embed = new MessageEmbed({ title: 'DiscLists Logger {ChannelUpdate}' })
    .addFields([
      { name: 'Old Channel', value: old },
      { name: 'New Channel', value: news }
    ])
    .setTimestamp(Time.createdAt)
  bot.channels.resolve('698918693991874570').send(embed)
}

module.exports.regs = (b) => { bot = b }
