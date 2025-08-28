import { Client, GatewayIntentBits, REST, Routes, Events, MessageFlags, SlashCommandBuilder } from 'discord.js';
import {AppClient} from "./utils/client.js";
import dotenv from "dotenv"

dotenv.config();

const client = new AppClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

await client.init();

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
})

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	try {
		await command?.execute(interaction);
	} catch (error) {
		console.error(error);
	}
});

client.login(process.env.TOKEN)