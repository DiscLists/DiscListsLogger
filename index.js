const { Client } = require('discord.js')

const onReady = require('./events/onReady')
const { info, dev, help } = require('./commands/index')

const bot = new Client()
bot.login(process.env.loggerToken)

onReady.regs(bot)

bot.on('ready', onReady)
bot.on('message', (msg) => {
  switch (msg.content) {
    case 'g/정보':
    case 'g/info':
      info(msg)
      break

    case 'g/크레딧':
    case 'g/credits':
    case 'g/개발자':
    case 'g/dev':
      dev(msg)
      break

    case 'g/help':
      help(msg)
      break
  }
})
