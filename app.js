const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

client.on('ready', () => {
  console.log(JSON.stringify({
    'name': client.user.tag,
    'status': "ready",
    'info': {
      commands: [
        {
          'name': "ping",
          'description': "Simple command for testing function"
        }
      ]
    }
  }))
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
})

client.login(process.env.DISCORD_TOKEN)
