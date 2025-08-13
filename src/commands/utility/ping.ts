import { SlashCommandBuilder } from "discord.js";

export let command = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!');