module.exports = {
	name: 'google',
	description: 'Googles something yea i guess',
	execute(message, args) {


		const channels = message.guild.channels.cache;
		const Discord = require('discord.js');
		const bot = new Discord.Client();

		const prefix = '^';

		const encode = require('strict-uri-encode');
		const moment = require('moment');
		const cheerio = require('cheerio');
		const request = require('request');


		const googleEmbedOne = new Discord.MessageEmbed()
		.setColor('#0066ff')
		.setTitle("**Type something after ^google**")

		exports.run = (client, message, args, trools) => {

			let question = encode.args.join(' ');

			let link = `https://www.google.com/search?-b-d&q=${question}`;
		}
		let question = args.slice(1).join('+');
		let link = `https://www.google.com/search?-b-d&q=${question}`;
		const googleEmbedTwo = new Discord.MessageEmbed()
		.setColor('#0066ff')
		.setTitle(`**${link}**`)

		if(!args[1]){
			message.channel.send("Type something after d!google")
			}
			else message.channel.send(googleEmbedTwo)

			},

		};
