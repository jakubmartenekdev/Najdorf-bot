import { SlashCommandBuilder, type CacheType, type Interaction } from "discord.js";
import type {SlashCommandBuilderI} from "./types.js"

export let command: SlashCommandBuilderI = {
	builder: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
		job: async (interaction: Interaction<CacheType>) => {
			if (!interaction.isChatInputCommand()) return;

			await interaction.reply('Pong!');
		}
}
