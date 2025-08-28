import { Client, Collection, type ClientOptions } from "discord.js";
import type { Command } from "../commands/types.js";
import { loadCommands, registerCommands } from "../handlers/command.js";

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>; 
  }
}

export class AppClient extends Client {
    // commands: Collection<string, Command>;

    constructor(options: ClientOptions) {
        super(options);
    
        super.commands = new Collection();

    }

    async init() {
        
        await loadCommands(this)

        await registerCommands(this);
    }
}