import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder, type Interaction, type MessageActionRowComponent } from "discord.js"
import type { Command } from "./types.js"

export let command: Command = {
    builder: new SlashCommandBuilder()
    	.setName('linklichess')
		.setDescription('Links lichess account!'),
    async execute(interaction: Interaction): Promise<void> {
		if (!interaction.isChatInputCommand()) return;
        const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm Ban')
			.setStyle(ButtonStyle.Danger);

        let row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(confirm);

        let exampleEmbed = new EmbedBuilder()
            .setTitle('Some title')

        await interaction.reply({content: "test", components: [row], embeds: [exampleEmbed]});   
    },
    visibility: true
}