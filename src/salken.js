let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak\nsaya adalah ASTRO-BOT, ASTRO BOT adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), 'ASTRO BOT', 'Menu', '.menu', m)
	}

handler.command = /^(salken|salamkenal)$/i

module.exports = handler
