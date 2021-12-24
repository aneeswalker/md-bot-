/**
   * Create By walker
   * Contact Me on wa.me/917356378949
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '31b7044b054b',
}

// Other
global.owner = ['917356378949','919746860283','917994909899']
global.packname = 'ꪶ͢ᴡ4ʟᴋᴇ6ꫂ⁴⁰⁴'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'walker'
global.prefa = ['w','!','.','/','?','*']
global.sp = '➹'
global.mess = {
    admin: 'ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏɴʟʏ☺️!',
    botAdmin: 'ʙᴏᴛ ᴍᴜsᴛ ᴀᴅᴍɪɴ💜!',
    owner: 'ᴏᴡɴᴇʀ ᴏɴʟʏ ʙʀᴏ💖',
    group: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴜsᴇ ɪɴ ɢʀᴏᴜᴘs🤍!',
    private: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴜsᴇ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛs🖤!',
    bot: 'ʙᴏᴛ ɴᴜᴍʙᴇʀ ᴜsᴇʀ ᴏɴʟʏ🧡',
    wait: 'ᴡᴀɪᴛ ᴀ ʙɪᴛ⚙️...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
