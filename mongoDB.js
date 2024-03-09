/*

             
            
            
            
            
            

   
   # MADE BY KASPER!! FEEL FREE TO USE ANY PART OF CODE
   ## Contact    [ DISCORD SERVER :  https://discord.gg/kaspersheart ]
*/
const { Schema, model } = require("mongoose");

const musicbot = Schema({
  guildID: String,
  role: String,
  language: String,
  channels: Array,
});


const playlist = Schema({
  userID: String,
  playlist: Array,
  musics: Array,
});


module.exports = {
  musicbot: model("musicbot", musicbot),
  playlist: model("playlist", playlist)
};
/*

             
            
            
            
            
            

   
   # MADE BY KASPER!! FEEL FREE TO USE ANY PART OF CODE
   ## Contact    [ DISCORD SERVER :  https://discord.gg/kaspersheart ]
*/
