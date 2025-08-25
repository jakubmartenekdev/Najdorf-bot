import { SlashCommandBuilder, type CacheType, type Interaction } from "discord.js";
import type { Command } from "./types.js"

export let command: Command = {
	builder: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	visibility: true,

	async execute(interaction: Interaction<CacheType>) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
		}
	},
}
