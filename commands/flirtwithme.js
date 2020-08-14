module.exports = {
	name: 'flirtwithme',
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
		"y'know, I'm not much of a photographer, but I can picture you and me together.",
    "how do you like your coffee? I should know for tomorrow morning.",
    "r don't know a single thing about poker but I wanna be the king of your heart.",
    "roses are red, violets are blue, poems are stupid, I wanna be with you.",
    "I'm lost, can you tell me how to get to your heart?",
    "I must be talking with the devil because you're hot as hell.",
    "Are you cereal because I put you before everything else.",
    "I would offer you a cigarette but you're already smoking hot.",
    "can I take your picture? I want to have proof that angels exist.",
    "I'm filing a complaint to Spotify. You weren't \'this week's hottest single\'",
    "I'm not Batman but you're Robin my heart.",
    "the results came back positive. I'm in love with you.",
    "are you gravity cause I've fallen for you.",
    "do you like boxing cause you're a knockout!",
	];

	let epicResult = answers[Math.floor(Math.random() * answers.length)];

  const person = message.mentions.users.first() || message.author
  let user = message.author
  let msgArgs = args.slice(1).join(" ");



  const flirtEmbed = new Discord.MessageEmbed()
  .setTitle("Rating the coolness of " + msgArgs)
  .setColor('#0066ff')
  .setDescription("Verdict: " + epicResult)

  const flirtEmbed1 = new Discord.MessageEmbed()
  .setTitle(`How cool is ${person.username}?`)
  .setColor('#0066ff')
  .setDescription("Verdict: " + epicResult)

  const coolEmbed2 = new Discord.MessageEmbed()
  .setTitle("Rating the coolness of " + message.author.username)
  .setColor('#0066ff')
  .setDescription("Verdict: " + epicResult)



  message.channel.send(`Yo, ${person.username}, ${epicResult}`);


	},
};
