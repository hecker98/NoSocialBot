module.exports = {
    name: 'youtube',
    description: "iscriviti al canale :3",
    execute(message, args){


        let role = message.guild.roles.cache.find(r => r.name === "modder");

        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('ora puoi bannare persone >:)');
        } else {
            message.channel.send('non puoi bannare, nn hai il ruolo.');
        }


        if(message.member.roles.cache.some(r => r.name === "modder")){
            message.channel.send('https://www.youtube.com/channel/UCcdJf8seR0fqXI1F3a6XC2A')
        
            


        } else {
            message.channel.send('ok, ti darò quel permesso <3');
            message.member.roles.add(role).catch(console.error);
        }   
    

    }
}