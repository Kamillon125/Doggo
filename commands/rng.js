module.exports = {
	name: 'rng',
	description: 'sudowoodo',
	execute(message, args) {


		const channels = message.guild.channels.cache;
	const Discord = require('discord.js');
	const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');
let number1 = args[1]; // args 1 is the thing after d!rng
let number2 = args[2]; // args 2 is the thing after args 1

var integer1 = parseInt(number1, 10); // this converts args 1 into number
var integer2 = parseInt(number2, 10); // converts args 2 into number

	const result = Math.floor(Math.random() * (integer2 - integer1 + 1) ) + integer1; // the random number generatoer

    let msgArgs = message.content.slice(2+4)


    const rngEmbed3 = new Discord.MessageEmbed()
    .setColor('#0066ff') // this is the fancy line on the left side of the embed that's blue
    .setTitle("Random Number Generator Error") // this is the title of the embed
    .setDescription(`You must input 2 numbers for this command to work.`)
    .setTimestamp()

if(!msgArgs){ return message.channel.send(rngEmbed3)}

const rngEmbed1 = new Discord.MessageEmbed()
.setColor('#0066ff') // this is the fancy line on the left side of the embed that's blue
.setTitle("Random Number Generator Error") // this is the title of the embed
.setDescription(`This command needs two numbers to work.`)
.setTimestamp()

if(isNaN(result)){ return message.channel.send(rngEmbed1)}


const epicEmbed1 = new Discord.MessageEmbed()
.setColor('#0066ff') // this is the fancy line on the left side of the embed that's blue
.setTitle("Random Number Generator") // this is the title of the embed
.setDescription(`Generating a random number from **${integer1}** to **${integer2}**`)
.addField("Result", `**${result}**`)
.setTimestamp() // this is the thing on the bottom of the embed that shows when the command was issued

    if (!args[2]) {return message.channel.send(rngEmbed1)}

    else message.channel.send(epicEmbed1)
		}

	};
