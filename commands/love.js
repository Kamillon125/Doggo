module.exports = {
		name: 'love',
		description: "i lov dog?",
		execute(message, args){

			const channels = message.guild.channels.cache;
			const Discord = require('discord.js');
			const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


let loveargs = message.content.slice(prefix.length).split(/ +/)
let person = message.mentions.users.first() || message.author

const love = Math.round(Math.random() * 100);
const loveIndex = Math.floor(love / 10);

if (love > 74){
  var epic = "💕"
}
else if (love > 49){
  var epic = "😊"
}
else if (love > 24){
  var epic = "😒"
}
else if (love < 25){
  var epic = "💔"
}
let loveEmbed3 = new Discord.MessageEmbed()
.setTitle("How loved are you?")
.setDescription(`${person.username}` + ' loves ' + message.author.username + ' this much: ' + `100` + '%' + ' ' + `💕`)
.setColor('#0066ff')

let loveEmbed = new Discord.MessageEmbed()
.setTitle("How loved are you?")
.setDescription(`${person.username}` + ' loves ' + message.author.username + ' this much: ' + `${love}` + '%' + ' ' + `${epic}`)
.setColor('#0066ff')

let loveEmbed1 = new Discord.MessageEmbed()
.setTitle("The command won't work if you don't ping another member, silly!")
.setColor('#0066ff')



if (person === message.author) {
  message.channel.send(loveEmbed1);
}
else if (message.author.id === "393878695607271427"){
	message.channel.send(loveEmbed3);
}
else message.channel.send(loveEmbed);


		}
};
