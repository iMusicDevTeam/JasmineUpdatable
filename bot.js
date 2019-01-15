const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.NTM0NDU5ODMyODI1MDIwNDE2.Dx5_Tw.Qnz1Viy2tjbZnVl4ZUdw7taNsHk);
