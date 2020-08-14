module.exports = {
	name: 'howcool',
	description: 'BOL XD',
	execute(message, args) {
		const Discord = require('discord.js');
	const bot = new Discord.Client();
	const token = 'the-bots-token';
	const prefix = '^';

	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


  let answers = [
		"pretty cool",
    "kinda cool",
    "ehhh",
    "10/10",
    "very cool",
    "very best",
    "insanely cool",
    "an actual pogchamp",
    "really cool",
    "pretty damn cool",
    "like a solid 7/10",
    "bestest",
    "cooler than the ice we skate",
    "bestest",
	];

	let epicResult = answers[Math.floor(Math.random() * answers.length)];

  const person = message.mentions.users.first() || message.author
  let user = message.author
  let msgArgs = args.slice(1).join(" ");



  const coolEmbed = new Discord.MessageEmbed()
  .setTitle("Rating the coolness of " + msgArgs)
  .setColor('#0066ff')
  .setDescription("Verdict: " + epicResult)

  const coolEmbed1 = new Discord.MessageEmbed()
  .setTitle(`How cool is ${person.username}?`)
  .setColor('#0066ff')
  .setDescription("Verdict: " + epicResult)

  const coolEmbed2 = new Discord.MessageEmbed()
  .setTitle("Rating the coolness of " + message.author.username)
  .setColor('#0066ff')
  .setDescription("Verdict: " + epicResult)



  message.channel.send(`${person.username} is ${epicResult}`);


	},
};
