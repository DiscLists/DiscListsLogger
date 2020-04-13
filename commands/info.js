const { MessageEmbed } = require('discord.js')

module.exports = (msg) => {
  const embed = new MessageEmbed({ color: '000000' })
    .addFields([
      { name: 'Your ID', value: 'ID : ' + msg.author.id },
      { name: 'Your name', value: 'Name : ' + msg.author },
      { name: 'Your CreatedAt', value: 'CreatedAt : ' + msg.author.createdAt }
    ])
    .setAuthor(msg.author.username + '\'s Info (DiscLists Logger)', msg.author.avatarURL())

  msg.channel.send(embed)
}
