module.exports = {
    name: 'ping',
    description: "questo è un ping",
    execute(message, args){
        message.channel.send('pong!');


    }

}