let bot
const onMessage = require('../events/onMessage')
const onMessageUpdate = require('../events/onMessageUpdate')
const onMessageDelete = require('../events/onMessageDelete.js')
const onChannelCreate = require('../events/onChannelCreate')
const onChannelUpdate = require('../events/onChannelUpdate')
const onChannelDelete = require('../events/onChannelDelete')

module.exports = () => {
  console.log('Logged in as ' + bot.user.tag + '!')
  bot.user.setActivity('DiscLists Logger', { type: 'WATCHING' })
  onMessage.regs(bot)
  onMessageUpdate.regs(bot)
  onMessageDelete.regs(bot)
  onChannelCreate.regs(bot)
  onChannelUpdate.regs(bot)
  onChannelDelete.regs(bot)

  bot.on('message', onMessage)
  bot.on('messageUpdate', onMessageUpdate)
  bot.on('messageDelete', onMessageDelete)
  bot.on('channelCreate', onChannelCreate)
  bot.on('channelUpdate', onChannelUpdate)
  bot.on('channelDelete', onChannelDelete)
}

module.exports.regs = (b) => { bot = b }
