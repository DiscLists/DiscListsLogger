let bot
const { MessageEmbed } = require('discord.js')

module.exports = (oldchannel, newchannel) => {
  const exclude = ['696580617575596132', '696581761835991051', '696581784108007474']
  if (exclude.includes(newchannel.id)) return

  const embed = new MessageEmbed({ title: 'DiscLists Logger {ChannelUpdate}' })
    .addFields([
      { name: 'type', value: oldchannel.type },
      { name: 'old channel', value: oldchannel.name + ' (<#' + oldchannel.id + '>, ' + oldchannel.id + ')' },
      { name: 'old category', value: oldchannel.parent.name + ' (' + oldchannel.parent.id + ')' },
      { name: 'old position', value: oldchannel.rawPosition },
      { name: 'old time', value: oldchannel.createdAt },
      { name: 'new channel', value: newchannel.name + ' (<#' + newchannel.id + '>, ' + newchannel.id + ')' },
      { name: 'new category', value: newchannel.parent.name + ' (' + newchannel.parent.id + ')' },
      { name: 'new position', value: newchannel.rawPosition },
      { name: 'new time', value: new Date() }
    ])
    .setTimestamp(new Date())
  bot.channels.resolve('698918693991874570').send(embed)
}

module.exports.regs = (b) => { bot = b }
