import bot from '../module/bot.js'

const welcome = () => {
  bot.on('message', (msg) => {
    let text = msg.text
    let chatid = msg.chat.id
    let username = msg.from.username
    let f = msg.from.first_name || ''
    let l = msg.from.last_name || ''

    const mes = `
<i>Hi <a href="https://t.me/${username}">${f} ${l}</a></i>
<blockquote>➤ welcome Anilive Studio \n➤ Watch your favorite anime \n➤ Search by title \n➤Find anime instantly</blockquote>
    `
    if (text === '/start')
      bot.sendVideo(chatid, './images/starty.mp4', {
        parse_mode: 'HTML',
        caption: mes,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '⮚Watch Anime⮘ ',
                callback_data: 'watch',
              },
            ],
            [
              {
                text: '⮚Search Anime⮘',
                callback_data: 'search',
              },
              {
                text: '⮚Favorites⮘',
                callback_data: 'love',
              },
            ],
            [
              {
                text: '⌂ Channel',
                url: 'https://t.me/your_channel',
              },
            ],
          ],
        },
      })
  })
}

export default welcome
