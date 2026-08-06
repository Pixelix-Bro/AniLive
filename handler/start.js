import bot from '../module/bot.js'

const welcome = () => {
  bot.on('message', (msg) => {
    let text = msg.text
    let chatid = msg.chat.id

    text === '/start' ? bot.sendMessage(`
        
      `)
  })
}

export default welcome
