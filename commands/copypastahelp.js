module.exports = {
	name: 'copypastahelp',
	description: 'Displays all the available copypasta commands.',
	execute(message, args) {
		const Discord = require('discord.js');
	const bot = new Discord.Client();
	const token = 'NzM0NDQ3NzQwNzA4MTkyMzE2.XxR3mg.D9QYymN5JmOKzGaBdchooSt-JDc';

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


		const copypastahelpEmbed = new Discord.MessageEmbed()
			.setColor('#0066ff')
			.setTitle('Available Copypasta Commands')
			.addField('Pokemon games', "johto, sinnoh, kalos, alola, tufworsttobest")
			.setFooter('Made by Kamil#6815')
			.setThumbnail('https://i.imgur.com/qn4BcKR.png')
			message.channel.send(copypastahelpEmbed);
	}
};
