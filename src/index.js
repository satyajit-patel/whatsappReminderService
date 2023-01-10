const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
 
 
const client = new Client({
  authStrategy: new LocalAuth(),
});
 
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});



const myGroupName = "riteshJio";

// client.on("ready", () => {
//   console.log("Client is ready!");
//   client.getChats().then((chats) => {
//     myGroup = chats.find((chat) => chat.name === myGroupName);
//     client.sendMessage(myGroup.id._serialized, "hey...How you doin ..");
//   });
// });

let cron = require('node-cron');
client.on("ready", () => {
    console.log("Client is ready!");
    cron.schedule('*/2 * * * *', () => {
        console.log('running a task every two minutes');

        client.getChats().then((chats) => {
            myGroup = chats.find((chat) => chat.name === myGroupName);
            client.sendMessage(myGroup.id._serialized, "how u doin...");
        });
    });
});




// const myChats = ["Contact1", "Contact2", "Group1"];
// client.on("ready", () => {
//     console.log("Client is ready!");
//     client.getChats().then((chats) => {
//       myChats.forEach((chatName) => {
//             const myChat = chats.find((chat) => chat.name === chatName);
//             if(myChat){
//                 // const attachmentPdf = MessageMedia.fromFilePath("./sample.pdf");
//                 // client.sendMessage(myChat.id._serialized, attachmentPdf); 
//                 client.sendMessage(myChat.id._serialized, "hello there");
//             }
//       });
//     });
// });

 
client.on('message', message => {
	if(message.body === 'ritesh') {
		message.reply('i love you');
	}
});
client.on('message', message => {
	if(message.body === 'Ritesh') {
		message.reply('i love you');
	}
});

 
client.initialize();