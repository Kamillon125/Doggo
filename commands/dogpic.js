module.exports = {
	name: 'dogpic',
	description: 'Sends a random shiba inu image.',
	execute(message, args) {


	const channels = message.guild.channels.cache;
	const Discord = require('discord.js');
	const bot = new Discord.Client();

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');


		image(message)

		function image(message){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cute shiba inu picture",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if (!urls.length) {

            return;
        }

        message.channel.send('Here\'s ' + message.author.username + '\'s dog pic!\n' + urls[Math.floor(Math.random() * urls.length)]);
    });
}
	},
};
