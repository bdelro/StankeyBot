// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const joke = require('./joke.js');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", (message) => {
    //checks for bot messages
    if(message.author.bot) return
    if(message.author.username=="cdmilk"){
        message.react(message.guild.emojis.cache.get('909903672329261076'))
    }
    //commands that start with !
    if (message.content.startsWith("!")) {
        if(message.content.substring(1)=="ping"){
            message.channel.send("pong!");
        }
        if(message.content.substring(1)=="joke"){
            message.channel.send(joke.tellJoke());
        }
        if(message.content.substring(1)=="delete" && message.channel.type=='GUILD_TEXT'){
            message.channel.bulkDelete(100);
        }
    }
    //general message editing
    if(message.content.toLowerCase().includes("john stankey") || message.content.toLowerCase().includes("john t. stankey")){
        message.channel.send("Did someone say JOHN STANKEY???");
    }
    if(message.content.toLowerCase().includes("verizon")){
        message.delete();
        message.channel.send(message.content.toLowerCase().replace("verizon","[redacted]"));
    }
    if(message.content.toLowerCase().includes("work")){
        message.react(message.guild.emojis.cache.get('924052408865284126'))
    }
  });
// Login to Discord with your client's token
client.login(token);