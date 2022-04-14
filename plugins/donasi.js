let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
DONASI GAYS BIAR BOT ON 24 JAM
--> PULSA: +6289687890508
--> INDOSAT: +6285722539582

KALO MINAT HUBUNGIN SAYA
--> wa.me/+6289687890508

makasih buat donasi
`.trim(), 'Donasi kagak cuman main bot gua -_-', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
