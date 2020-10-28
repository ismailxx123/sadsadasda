const Discord = require('discord.js'); 
const snekfetch = require('snekfetch'); 
const ayarlar = require('index.js'); 

exports.run = async (bot, message, args) => { 

 const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=TR`); 
    const body = text.body; 
  let ülk = body.countrydata[0].info.title 

    let embed = new Discord.RichEmbed() 
    .setColor('#ff1111') 
    .setTitle('COVID-19') 
    .setDescription(`**COVID-19** - **${ülk}**`) 
    .setThumbnail(`https://www.countryflags.io/TR/shiny/64.png`) 
    .addField('Toplam vaka sayısı:', body.countrydata[0].total_cases, true) 
    .addField('İyileşen:', body.countrydata[0].total_recovered, true) 
    .addField('Enfekte:', body.countrydata[0].total_active_cases, true) 
    .addField('Ölümler:', body.countrydata[0].total_deaths, true) 
    .addField('Bugün yeni vakalar:', body.countrydata[0].total_new_cases_today, true) 
    .addField('Bugün yeni ölümler:', body.countrydata[0].total_new_deaths_today, true) 
    .addField('Ciddi Vakalar:', body.countrydata[0].total_serious_cases, true) 
    .setTimestamp() 
    .setFooter('COVID-19', bot.user.avatarURL);
    
    message.channel.send(embed); 
      
  }
    
; 
exports.conf = { 
  enabled: true,  
  guildOnly: false,  
  aliases: ['corona','cov'], 
  permLevel: 0  
};

exports.help = {
  category: 'kullanıcı', 
  name: 'korona', 
  description: 'korona {türkiyede kaç kişi kapmış}', 
  usage: '' 
};