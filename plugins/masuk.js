function handler(m) {
    m.reply('Chat ke owner untuk informasi lebih lanjut.')
    this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '6285722539582@s.whatsapp.net'), m)
    this.sendContact(m.chat, '6289687890508@s.whatsapp.net', 'Owner Bot', m)
  }
  handler.command = /^(masuk)$/i
  
  module.exports = handler
  
