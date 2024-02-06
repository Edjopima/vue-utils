#! /usr/bin/env node

import { BuildModule } from "./modules/ModuleBuilder/ModuleBuilder";
import { buildVue3Component } from "./modules/Vue3ComponentBuilder/Vue3ComponentBuilder";
import { buildComponent } from "./modules/VueComponentBuilder/VueComponentBuilder";

const args = process.argv.slice(2);
const command = args[0];
const name = args[1];
const path = args[2];

const printHelp = () => {
  console.log(`
  Commands:
  -m or module: create a module
    example: vutil -m moduleName path
  -c or component: create a component
    example: vutil -c componentName path
  -h or help: show this message
  `)
}

const validCommands = ['module', '-m', 'component', '-c', 'component-3', '-c3', 'help', '-h'];

if (!validCommands.includes(command)) {
  console.log(`Invalid Command: ${command} \nUse -h or help to see the list of commands.`);
  process.exit(1);
}

const functions = {
  module: BuildModule,
  '-m': BuildModule,
  component: buildComponent,
  '-c': buildComponent,
  'component-3': buildVue3Component,
  '-c3': buildVue3Component,
  help: printHelp,

}

const func = functions[command];

if (func) {
  func(name, path);
} else {
  printHelp();
}