import type { CacheType, Interaction, SlashCommandBuilder } from "discord.js";

export interface SlashCommandBuilderI {
    builder: SlashCommandBuilder
    job: (interaction: Interaction<CacheType>) => Promise<void>
}