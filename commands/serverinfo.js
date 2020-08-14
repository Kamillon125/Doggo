module.exports = {
		name: 'serverinfo',
		description: "Displays the information about the server.",
		execute(message, args){
			
			const channels = message.guild.channels.cache;
			const Discord = require('discord.js');
			const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');
			
			
			const serverinfoEmbed = new Discord.MessageEmbed()
			.setColor('#0066ff')
			.setTimestamp()
			.setAuthor(message.guild.name)
			.addField("Name", message.guild.name)
			.addField("ID", message.guild.id)
			.addField("Owner", `${message.guild.owner.user.tag}`)
			.addField("Members", `${message.guild.memberCount}`)
			.addField("Text channels", `${channels.filter(channel => channel.type === 'text').size}`)
			.addField("Created", `${moment(message.guild.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
			.setThumbnail(message.guild.iconURL ({ dynamic: true }))
		message.channel.send(serverinfoEmbed);
		}
};