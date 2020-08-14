module.exports = {
	name: 'pog',
	description: 'pogs',
	execute(message, args) {
		const Discord = require('discord.js');
	const bot = new Discord.Client();
	const token = 'NzM0NDQ3NzQwNzA4MTkyMzE2.XxR3mg.D9QYymN5JmOKzGaBdchooSt-JDc';
	const prefix = '^';

	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


	const pogs = [
		"https://i.redd.it/7acmiexk6yx41.png",
		"https://pbs.twimg.com/media/DlMbFaGVAAEZM2l.jpg",
		"https://pbs.twimg.com/profile_images/1146566744775036928/L_q4e4op_400x400.png",
		"https://i.redd.it/4r09gge76oi31.jpg",
		"https://ih1.redbubble.net/image.517537267.7910/flat,800x800,075,f.u3.jpg"
	];

	const result = pogs[Math.floor(Math.random() * pogs.length)];
	message.channel.send(result)


	},
};
