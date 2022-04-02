module.exports = {
    name: 'regole',
    description: "Embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F40000')
        .setTitle('Regole')
        .setURL('https://www.youtube.com/channel/UCcdJf8seR0fqXI1F3a6XC2A')
        .setDescription('queste sono le regole del server')
        .addFields(
            {name: 'Regola 1', value: 'non deridere gli hobby o abitudini altrui'},
            {name: 'Regola 2', value: 'non prendere sul serio gli atteggiamenti fascisti'},
            {name: 'Regola 4', value: 'non postare contenut NSFW fuori da depressionesentimentirepressi'},
            {name: 'Regola 5', value: 'le battute di dark humor sono concesse solo in depressionesentimentirepressi'},
            {name: 'Regola 6', value: 'non citare le frasi di trashtubers per es. me contro te'},
            {name: 'Regola 7', value: 'se ci sono problemi, avvisate gli admin o il founder, il server deve essere un posto libero!'}

        )
        .setImage('https://geekmindset.net/wp-content/uploads/2022/02/Sus-%E5%9C%A8%E6%96%87%E6%9C%AC%E4%BF%9A%E8%AA%9E%E4%B8%AD.jpg')
        .setFooter('ricordatevi di dare un occhiata alle regole');

        message.channel.send({ embeds: [newEmbed] });

    }


}    
    



    
