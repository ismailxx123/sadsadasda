const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();

const radyo = {
    fenomen : "https://fenomenturk.listenfenomen.com/fenomen/128/icecast.audio",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio",
    fenomenturkrap:"https://fenomenturk.listenfenomen.com/fenomenturkrap/128/icecast.audio",
    fenomen2010:"https://fenomenturk.listenfenomen.com/fenomen2010/128/icecast.audio",
    fenomenkarisik:"https://fenomenturk.listenfenomen.com/fenomenkarisik/128/icecast.audio",
    fenomenpop:"https://fenomenturk.listenfenomen.com/fenomenpop/128/icecast.audio",
    fenomendans:"https://fenomenturk.listenfenomen.com/fenomendans/128/icecast.audio",
    vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox ",
    fenomenclubbin:"https://fenomenturk.listenfenomen.com/fenomenclubbin/128/icecast.audio",
    fenomenrap:"https://fenomenturk.listenfenomen.com/fenomenrap/128/icecast.audio",
    fenomenoriental:"https://fenomenturk.listenfenomen.com/fenomenoriental/128/icecast.audio",
    fenomenakustik:"https://fenomenturk.listenfenomen.com/fenomenakustik/128/icecast.audio",
}

exports.run = function(bot, message, args) {

  message.delete(10000).catch(console.error);
    if (!message.member.voiceChannel) return message.reply("**:bangbang: Sana bağlanmam için ilk önce sesli bir kanala katılmalısın.").then(m => m.delete(15000)).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.reply("**\n \n  🎵 Radyo İstasyonları 🎵  \n \n 1 = Fenomen \n 2 = FenomenTürk \n 3 = Virgin Radio\n 4 = Fenomen Türkçe Rap \n 5 = Fenomen2010 \n 6 = Fenomen Karisik \n 7 = Fenomen Pop \n 8 = Fenomen Dans \n 9 = Fenomen Clubbin \n 10 = Fenomen Rap \n 11 = Fenomen Oriental \n 12 = Fenomen Akustik \n \n Açmak İçin !radyo <numara> \n Kapatmak İçin !radyo kapat**").then(m => m.delete(40000)).catch(console.error);
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen);
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
    
            } else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "2") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenfm);
                message.reply("🎧 | **Başarılı! `FenomenTÜRK` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })                                                                                    
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voiceChannel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voiceChannel}.`);
        
          } else if (args[0].toLowerCase() === "Virgin Radio" || args[0] === "3") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.vergın);
                message.reply("🎧 | **Başarılı! `Virgin Radio` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete(10000)).catch(console.error);
            })   
        }
       else if (args[0].toLowerCase() === "fenomenturkrap" || args[0] === "4") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenturkrap);
                message.reply("🎧 | **Başarılı! `fenomenturkrap` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
       else if (args[0].toLowerCase() === "fenomen2010" || args[0] === "5") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen2010);
                message.reply("🎧 | **Başarılı! `fenomen2010` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomenkarisik" || args[0] === "6") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenkarisik);
                message.reply("🎧 | **Başarılı! `fenomenkarisik` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomenpop" || args[0] === "7") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenpop);
                message.reply("🎧 | **Başarılı! `fenomenpop` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomendans" || args[0] === "8") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomendans);
                message.reply("🎧 | **Başarılı! `fenomendans` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomenclubbin" || args[0] === "9") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenclubbin);
                message.reply("🎧 | **Başarılı! `fenomenclubbin` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomenrap" || args[0] === "10") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenrap);
                message.reply("🎧 | **Başarılı! `fenomenrap` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomenoriental" || args[0] === "11") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenoriental);
                message.reply("🎧 | **Başarılı! `fenomenoriental` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
      else if (args[0].toLowerCase() === "fenomenakustik" || args[0] === "12") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenakustik);
                message.reply("🎧 | **Başarılı! `fenomenakustik` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            }
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: 'radyo'
};