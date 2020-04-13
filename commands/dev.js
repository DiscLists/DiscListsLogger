const { MessageEmbed } = require('discord.js')

module.exports = (msg) => {
  const embed = new MessageEmbed({ title: 'DiscLists Dev List', color: '000000' })
    .addFields([
      { name: '지아#4224', value: 'CEO / Bot Dev' },
      { name: 'TriNet / PMH#7086', value: 'CTO / Bot Dev' },
      { name: 'Comjun04#5963', value: 'CSO / Bot Dev' }
    ])
  msg.channel.send(embed)
}
