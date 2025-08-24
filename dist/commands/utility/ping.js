import { SlashCommandBuilder } from "discord.js";
export let command = {
    builder: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    job: async (interaction) => {
        if (!interaction.isChatInputCommand())
            return;
        await interaction.reply('Pong!');
    }
};
//# sourceMappingURL=ping.js.map