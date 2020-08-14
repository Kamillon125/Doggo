module.exports = {
	name: 'reddit',
	description: 'doot doot',
  execute(message, args) {
  run: async(bot,message,args)=>{
		const Discord = require('discord.js');

	const token = 'NzM0NDQ3NzQwNzA4MTkyMzE2.XxR3mg.D9QYymN5JmOKzGaBdchooSt-JDc';

	const prefix = '^';


	const moment = require('moment');
	const cheerio = require('cheerio');
	const request = require('request');
  const api = require("imageapi.js");
  let subreddit = message.content.slice(9)
  if(!subreddit)return message.channel.send('Specify the subreddit from which you want the post.')
    try {
      let img = await api(subreddit)
      const epicEmbed = new Message.Embed()
      .setTitle(`A random image from r/${subreddit}`)
      .setColor('#0066ff')
      .setImage(img)
      message.channel.send(epicEmbed)
    }catch(err){
      message.channel.send(err)

    }
    }


	}
};
