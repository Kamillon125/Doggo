module.exports = {
	name: 'didiask',
	description: 'did he ask',
	execute(message, args) {


	const channels = message.guild.channels.cache;
	const Discord = require('discord.js');
	const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


let questions = ["No", "Yes"]

let result = questions[Math.floor(Math.random() * questions.length)];
let askEmbed = new Discord.MessageEmbed()
.setTitle(`Did ${message.author.username} ask?`)
.setDescription(result)
.setColor('#0066ff')

message.channel.send(askEmbed)

	},
};
