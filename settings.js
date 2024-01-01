const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['51945463812'] //ur owner number
global.ownernomer = "51945463812" //ur owner number2
global.ownername = "𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂" //ur owner name
global.ytname = "𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂" //ur yt chanel name
global.socialm = "GitHub: 𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂" //ur github or insta name
global.location = "Peru" //ur location

//new
global.ownergc = "-"
global.botname = "Created By 𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂"
global.ownerNumber = ["51945463812@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@Syssolutionsperu"
global.themeemoji = '🪀'
global.wm = "𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂"
global.packname = "𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂"
global.author = "𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = 'Peru' // id location

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/26e0f1f23a416a4261b73.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
