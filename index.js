const Discord = require('discord.js');


const bot = new Discord.Client();
const token = 'NzM0NDQ3NzQwNzA4MTkyMzE2.XxR3mg.D9QYymN5JmOKzGaBdchooSt-JDc';

const prefix = 'd!';

const Canvas = require('canvas');
const encode = require('strict-uri-encode');
const moment = require('moment');
const cheerio = require('cheerio');
const request = require('request');

const fs = require('fs')
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{
	console.log('This bot is online!');
	bot.user.setActivity(` ${prefix}`,{type: 'LISTENING'})
})

// made with tutorials by codelyon!
bot.on("guildCreate", guild => {
   guild.owner.send(`Hey! I've been invited to your server! My prefix is ${prefix}. Use ${prefix}help to get started!`)
});

bot.on('message', message=>{

  if(message.author.bot) return


  else if(!message.content.toLowerCase().startsWith(prefix)) return
  let args = message.content.substring(prefix.length).split(" ") // fixed by like
  let command = bot.commands.get(args[0].toLowerCase())
	 if (command) {
     command.execute(message, args);
   }
})

bot.login(token);
