let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
DONASI GAYS BIAR BOT ON 24 JAM
--> PULSA: +6288687890508
--> INDOSAT: +6285722539582

KALO MINAT HUBUNGIN SAYA
--> wa.me/+6289687890508

makasih buat donasi`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rm5.00\nSewa bot 1 Minggu.", rowId:".masuk"},
        {title: '2 Minggu', description: "Rm10.00\nSewa bot 2 Minggu.", rowId:".masuk"},
        {title: '3 Minggu', description: "Rm15.00\nSewa bot 3 Minggu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rm20.00\nSewa bot 1 Bulan.", rowId:".masuk"},
        {title: 'premium', description: "Free\nharga 30.000", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot WarDB0TZ", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
