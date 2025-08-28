import { Collection, SlashCommandBuilder, type CacheType, type Interaction } from "discord.js";
import type { Command } from "./types.js"

export let command: Command = {
	builder: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	visibility: true,

	async execute(interaction: Interaction) {
		if (!interaction.isChatInputCommand()) return;

		interaction.reply({content: "Pong!", ephemeral: true});
		
	},
}
