module.exports = {
	name: 'dm',
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

	const member = message.mentions.users.first() || message.author
	if (!member){ return message.channel.send('specify a member to dm hehehehhehehe')
	}


			let msgArgs = message.content.slice(5+member.id.length+4)
if(!msgArgs){ return message.channel.send('yo what?')

}
else
	member.send(msgArgs)
	message.channel.send(`I have succesfully dmed ${member.username}!`)
	.catch(() => message.channel.send(`${member.username} has their dms set to friends only!`));






		}

	};
