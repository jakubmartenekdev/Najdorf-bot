import type { CacheType, Interaction, SlashCommandBuilder } from "discord.js";

export interface Command {
    builder: SlashCommandBuilder,
    execute: (interaction: Interaction<CacheType>) => Promise<void>,
    visibility: boolean
}