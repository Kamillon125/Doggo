module.exports = {
	name: 'poll',
	description: 'Sets up a simple yes or no poll.',
	execute(message, args) {
		const channels = message.guild.channels.cache;
	const Discord = require('discord.js');
	const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');

		const pollEmbedOne = new Discord.MessageEmbed()
		.setColor('#0066ff')
		.setTitle("**Type something after d!poll**")

			let msgArgs = args.slice(1).join(" ");
		  const pollEmbedtwo = new Discord.MessageEmbed()
		  .setColor('#0066ff')
			.setTitle(`${message.author.tag} asks:`)
			.setDescription(`${msgArgs}`)
			.setTimestamp()


			if(!args[1]){
				message.channel.send("Type something after d!poll");
				}
				else  message.channel.send(pollEmbedtwo).then(messageReaction => {
 		    messageReaction.react("👍");
 		    messageReaction.react("👎");
				messageReaction.react("🤔")
 		  });





		}

	};
