module.exports = {
	name: 'kekw',
	description: 'kekw',
	execute(message, args) {
		const Discord = require('discord.js');
	const bot = new Discord.Client();
	const token = 'the-bots-token';

	const prefix = '^';

  const canvas = require('canvas');
	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');

	const kekws = [
		"https://cdn.discordapp.com/attachments/734450097051402383/735123356776661012/mqdefault.jpg",
		"https://www.swd.us.edu.pl/wp-content/uploads/2020/02/EFbkSYxUEAASfez-300x300.jpg",
	];

	const result = kekws[Math.floor(Math.random() * kekws.length)];
	message.channel.send(result)

}
};
