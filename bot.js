const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


const developers = ["320015606071951360"] :point_left:
const adminprefix = "&";
client.on('message', message => {
    var argresult = message.content.split( ).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(**Status You   ${argresult}**)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(**Status You   ${argresult}**)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(**Status You  ${argresult}**)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://twitch.tv/Lion_AR1%22);
      message.channel.send(**Status You ${argresult} **)
}
});




client.login(process.env.BOT_TOKEN);
