 //multiplayer quests with others - asks for room code, room access and a room name (customizable and optional)

 const Discord = require('discord.js');

 exports.run = (client, message, args) =>
{
  em = new Discord.RichEmbed();

  let roomcode =  args[0];
  let roomaccess = args[1];
  let roomname = args.slice(2).join(" ");

  let roomaccessvalue = "";

  if (roomaccess == "1")  //tests for room access codes so that it knows what color to embed and what to tell the player.
  {
    roomaccessvalue = "Open to Public";
    em.setColor(0x004080);
  }
  else if (roomaccess == "2")
  {
    roomaccessvalue = "Open to Guild";
    em.setColor(0x00FF00);
  }
  else if (roomaccess == "3")
  {
    roomaccessvalue = "Code Only";
    em.setColor(0xFF0000);
  }
  else
  {
    message.channel.send("please input 1, 2, or 3 as your access code.  View `" + prefix + "help multiQuest` for more details.");
    return;
  }

  var testRegex = /^\d{6}$/;  //thanks, Anwonu
  if (testRegex.test(roomcode) == false)  //tests if the value is false, and if so, throws an error, otherwise provides the room code embed.
  {
    message.channel.send("Room code invalid!");
    return;
  }

  em.setTitle("A Multiplayer Quest room has opened!")
    .setDescription("Room Name: " + roomname + "\nRoom Access: " + roomaccessvalue + "\nRoom Code: " + roomcode + "\n\n" + "https://tapi.puyoquest.jp/multi/redirect/?room_no=" + roomcode);

  //message.channel.send("<@&" + config.PPQTag + ">"); --disabled due to people bothered by pings.
  message.channel.send(em);
}