module.exports = {
    name: 'clear',
    description: "Clear messages!",
    execute(message, args) {
        if(!args[1]) return message.reply("inserisci la quantità di messagi che vuoi eliminare");
        if(isNaN(args[1])) return message.reply("inserisci un vero numero pls :3");

        if(args[0] > 100) return message.reply("hey 100 messagi sono abbastanza -_-");
        if(args[0] > 1) return message.reply("devi eliminare almeno un messaggio!")
    }
}
