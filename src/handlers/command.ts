import { type Command } from "../commands/types.js"; // todo: global scope
import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { AppClient } from "../utils/client.js";
import { REST, Routes } from "discord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadCommands(client: AppClient) {
    try {
        let commandsPath = path.join(__dirname, "../", "/commands");
          
        let dirContents = fs.readdirSync(commandsPath);
        let jsFiles = dirContents.filter(file => file.endsWith(".js"));

        for (let file of jsFiles) {
            console.log(`[INFO] preparing to load command module "${file}"`);
            let modulePath = path.join(commandsPath, file);
            let commandModule = await import(pathToFileURL(modulePath).toString()); 
            let command = commandModule?.command;

            if (!command) {
                console.log(`[INFO] module ${file} is not a command module and will be excluded!`);
                continue;
            };
            
            if (!isSlashCommand(command)) return;

            if (command?.visibility == false) {
                console.log(`[WARNING] module at ${modulePath} was not loaded!`);
                continue;
            }
            client.commands.set(command.builder.name, command);
            console.log(`[INFO] successfully loaded module "${file}"`);
            
        }

    }
    catch(err) {
        console.error(err);
    }
}


// tu je bug
function isSlashCommand(command: any): command is Command {
    return "builder" in command && "execute" in command
}

export async function registerCommands(client: AppClient) {
    if (!process.env.TOKEN) return;

    try {
        let commandsJson = [];
        const rest = new REST().setToken(process.env.TOKEN);
        for (let [_, command] of client.commands) {
            commandsJson.push(command.builder.toJSON());
            console.log(command.builder.toJSON());
        }
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID || ""),
            { body: commandsJson },
        );
    } catch(err) {
        console.error(err);
    }

}