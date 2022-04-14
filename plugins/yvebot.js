let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `*hai kak*\n*Saya lissbot*\n*Pilih Menu Di Bawah Yaa Bree*\n*Spam = Banned*\n*Telp = Blok*\n\n*Join Group WhatsApp*\nhttp://chat.whatsapp.com/JWj0RCPO6XF1Y71vne5LXw\n\n*Untuk Melihat Menu Bot Ketik .menu*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated lissbot by lisa cantik\n`.trim(), '📑MENU', '.?', '🍭Owner', '.owner', '📖Info Bot', '.infobot', m)
}

handler.help = ['lissbot']
handler.tags = ['owner']
handler.command = /^(lissbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler
