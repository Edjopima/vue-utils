#! /usr/bin/env node

import { BuildModule } from "./modules/ModuleBuilder/ModuleBuilder";
import { buildComponent } from "./modules/VueComponentBuilder/VueComponentBuilder";

const args = process.argv.slice(2);
const command = args[0];
const name = args[1];
const path = args[2];

if (command === 'module' || command === '-m') {
  BuildModule(name, path);
}

if (command === 'component' || command === '-c') {
  buildComponent(name, path);
}

// create help command, and add it to the list of commands, print in the console the way of use of the commands
if (command === 'help' || command === '-h') {
  console.log(`
  Commands:
  -m or module: create a module
    example: vutil -m moduleName path
  -c or component: create a component
    example: vutil -c componentName path
  -h or help: show this message
  `)
}