module.exports = {
		name: 'userinfo',
		description: "Displays the information about the user.",
		execute(message, args){

			const Discord = require('discord.js');
			const bot = new Discord.Client();



	const prefix = '^';

	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');



			let user = message.mentions.users.first() || message.author // defines user as the person who was mentioned in the command OR the person who wrote the command if nobody was mentioned

			if (message.author.presence.status === 'dnd') message.author.presence.status = 'Do Not Disturb'; // these 4 lines basically make it so that discord's internal way of showing statuses (for example dnd) gets replaced with the human way, aka - Do not Disturb, etc
			if (message.author.presence.status === 'online') message.author.presence.status = 'Online';
			if (message.author.presence.status === 'idle') message.author.presence.status = 'Idle';
			if (message.author.presence.status === 'offline') message.author.presence.status = 'Offline';

			const userinfoEmbed = new Discord.MessageEmbed() // this makes a discord embed
			.setDescription(user.tag, user.displayAvatarURL) // this shows your tag and your avatar
			.setColor('#0066ff') // this is the fancy line on the left side of the embed that's blue
			.setTitle("User Information") // this is the title of the embed
			.setTimestamp() // this is the thing on the bottom of the embed that shows when the command was issued
			.setThumbnail(user.displayAvatarURL()) // your avatar again, one of these avatar thingies doesnt work but i cba to check which one, probably the first one
			.addField("Made the account", `${moment(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`) // checks when you made the account, the format thing just formats it into cleaner text
			.addField("Status", user.presence.status) // shows your status, this is why i needed the 4 lines above that translated dnd into do not disturb
			.setFooter(`ID: ${user.id}`) // this is the footer of the embed, aka the thing thats on the bottom

			message.channel.send(userinfoEmbed); // this basically sends the embed i defined in the lines above to chat
		}
};
