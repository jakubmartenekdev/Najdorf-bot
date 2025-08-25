import { Client, GatewayIntentBits, REST, Routes, Events, MessageFlags, SlashCommandBuilder } from 'discord.js';
// import {command, type SlashCommandBuilderI} from "./commands/utility/index.js"
import { AppClient } from "./utils/client.js";
import dotenv from "dotenv";
dotenv.config();
const client = new AppClient({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
await client.init();
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand())
        return;
    interaction.client.user.tag;
    if (interaction.commandName === 'ping') {
        await interaction.reply({ content: 'Secret ping Ponga!' });
    }
});
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map