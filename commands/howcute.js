module.exports = {
		name: 'howcute',
		description: "HOW CUTE AM I DOE",
		execute(message, args){

			const channels = message.guild.channels.cache;
			const Discord = require('discord.js');
			const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


let cuteargs = message.content.slice(prefix.length).split(/ +/)
let person = message.mentions.users.first() || message.author

const cute = Math.round(Math.random() * 100);
const cuteIndex = Math.floor(cute / 10);

let cuteEmbed = new Discord.MessageEmbed()
.setTitle("How cute are you?")
.setDescription(`${person} is ${cute}% cute`)
.setColor('#0066ff')
message.channel.send(cuteEmbed)

		}
};
