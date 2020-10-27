const Discord = require('discord.js');
const client = new Discord.Client();
const auth_token = 'this is your bot authorization key';

client.on('ready', () => {
  //other ready events
  DBLAPI({
    client: client,
    authorization: auth_token
  })
});

//other code (eg. message events, login)
