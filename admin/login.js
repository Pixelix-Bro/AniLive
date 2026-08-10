import bot from '../module/bot.js'
const login = () => {
  bot.on('message', (msg) => {
    let text = msg.text
    let chatid = msg.chat.id
    let userid = msg.from.id
    let f = msg.from.first_name || ''
    let l = msg.from.last_name || ''

    if (text === '/panel') {
      if (userid === 8194599016) bot.sendMessage(chatid, `Admin Panelga Hush kelibsiz ${f} ${l} `)
    }
  })
}

export default login
