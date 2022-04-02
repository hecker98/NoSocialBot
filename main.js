const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '%';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('NoSocialBot è tra noi...');
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'regole'){

        client.commands.get('regole').execute(message, args, Discord);
    }   

});

client.login(process.env.token);




