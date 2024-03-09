const config = require('./config.js');

if(config.shardManager.shardStatus == true){

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN });
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();

} else {

require("./bot.js")

}
/*

             
            
            
            
            
            

   
   # MADE BY KASPER!! FEEL FREE TO USE ANY PART OF CODE
   ## Contact    [ DISCORD SERVER :  https://discord.gg/kaspersheart ]
*/
