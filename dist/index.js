import { Client, GatewayIntentBits, REST, Routes, Events, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { command } from "./commands/utility/ping.js";
import dotenv from "dotenv";
dotenv.config();
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
// client.
if (process.env.TOKEN) {
    const rest = new REST().setToken(process.env.TOKEN);
    // console.log(process.env.CLIENT_ID);
    (async () => {
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID || ""), { body: [command.toJSON()] });
    })();
}
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand())
        return;
    if (interaction.commandName === 'ping') {
        await interaction.reply({ content: 'Secret Pong!' });
    }
});
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map