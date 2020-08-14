module.exports = {
	name: 'sudo',
	description: 'sudowoodo',
	execute(message, args) {


		const channels = message.guild.channels.cache;
	const Discord = require('discord.js');
	const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');

	const whitelistedMembers = ["358535242409050113", "393878695607271427", "665138088879718404"];
	if(!whitelistedMembers.includes(message.author.id)) return message.channel.send('no perms');

	const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
	if (!channel){ return message.channel.send('YOU DID NOT SPECIFY CHANNEL')
	}


			let msgArgs = message.content.slice(2+5+channel.id.length+3)
if(!msgArgs){ return message.channel.send('yo what?')

}
else
	channel.send(msgArgs);





		}

	};
