const { MessageEmbed } = require('discord.js')

module.exports = (msg) => {
  const embed = new MessageEmbed({ title: 'DiscLists Helper', color: '000000' })
    .addFields([
      { name: 'g/help', value: 'This!' },
      { name: 'g/info', value: 'Show your info' },
      { name: 'g/dev', value: 'Developers Lists' }
    ])
  msg.channel.send(embed)
}
