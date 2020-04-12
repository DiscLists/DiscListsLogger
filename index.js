const { Client, MessageEmbed } = require('discord.js')

const onMessage = require('./events/onMessage')
const onMessageUpdate = require('./events/onMessageUpdate')
const onChannelCreate = require('./events/onChannelCreate')
const onChannelUpdate = require('./events/onChannelUpdate')
const onChannelDelete = require('./events/onChannelDelete')

const bot = new Client()
bot.login(process.env.loggerToken)

bot.on('message', onMessage)
bot.on('messageUpdate', onMessageUpdate)
bot.on('channelCreate', onChannelCreate)
bot.on('channelUpdate', onChannelUpdate)
bot.on('channelDelete', onChannelDelete)

bot.on('ready', () => {
  console.log('Logged in as ' + bot.user.tag + '!')
  bot.user.setActivity('DiscLists Logger', { type: 'WATCHING' })

  onMessage.regs(bot)
  onMessageUpdate.regs(bot)
  onChannelCreate.regs(bot)
  onChannelUpdate.regs(bot)
  onChannelDelete.regs(bot)// 봇 객체를 모듈에게 준적이 없잖아요
})

bot.on('message', (msg) => {
  if (msg.content === 'g/info') {
    const embed = new MessageEmbed({ color: '000000' })
      .addFields([
        { name: 'Your ID', value: 'ID : ' + msg.author.id },
        { name: 'Your name', value: 'Name : ' + msg.author },
        { name: 'Your CreatedAt', value: 'CreatedAt : ' + msg.author.createdAt }
      ])
      .setAuthor(msg.author.username + '\'s Info (DiscLists Logger)', msg.author.avatarURL())

    msg.channel.send(embed)
  }

  if (msg.content === 'g/dev') {
    const embed = new MessageEmbed({ title: 'DiscLists Dev List', color: '000000' })
      .addFields([
        { name: '지아#4224', value: 'CEO / Bot Dev' },
        { name: 'TriNet / PMH#7086', value: 'CTO / Bot Dev' },
        { name: 'Comjun04#5963', value: 'CSO / Bot Dev' }
      ])
    msg.channel.send(embed)
  }
})
