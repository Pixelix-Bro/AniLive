import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

dotenv.config()

const bot = new TelegramBot(process.env.TOKEN, {
  polling: true,
})

export default bot
