module.exports = {
	name: 'help',
	description: 'Displays all the available commands.',
	execute(message, args) {
		const Discord = require('discord.js');
	const bot = new Discord.Client();
	const token = 'NzM0NDQ3NzQwNzA4MTkyMzE2.XxR3mg.D9QYymN5JmOKzGaBdchooSt-JDc';

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#0066ff')
			.setTitle('Available Commands')
			.addField('Utility', "userinfo, serverinfo, poll, google, rng")
			.addField('Fun', "dogpic, pog, spongegar, kekw, ask, flirtwithme")
			.addField('Rate', "howcute, love, howcool")
			.addField('Reddit', "dankmemes, rarepuppers, mechanicalkeyboards")
			.setFooter('Made by Kamil#6815')
			.setThumbnail('https://i.imgur.com/qn4BcKR.png')
			message.channel.send(helpEmbed);
	}
};
