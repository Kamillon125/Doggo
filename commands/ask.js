module.exports = {
	name: 'ask',
	description: 'BOL XD',
	execute(message, args) {
		const Discord = require('discord.js');
	const bot = new Discord.Client();
	const token = 'the-bots-token';
	const prefix = '^';

	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


  const answers = [
		"Yes.",
		"Perhaps.",
		"Yesn't.",
		"No idea.",
		"I don't know but you're awesome, don't let anyone get you down!",
    "That's a good question.",
    "bruh",
    "Listen, man, I don't know why you're asking me this. I'm literally a bot. I'm just some code. But to answer your question, no.",
    "It would be a shame if instead of answering your troll questions I just ignored them.",
    "I don't wanna sound mean or anything because you're nice but I honestly don't really care, sorry.",
		"lol no",
		"Yeah alright but have you ever seen a puppy so small it can fit in a glove?",
	];

	const epicResult = answers[Math.floor(Math.random() * answers.length)];


  if(!args[1]){
  message.channel.send(message.author.username + ', ask a full question, dude.');
  }
  else  message.channel.send(epicResult);

	},
};
