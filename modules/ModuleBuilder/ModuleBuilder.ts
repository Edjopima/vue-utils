import fs from 'fs';
import path from 'path';

export const BuildModule = (name: string, rawPath: string = './') => {
  // create folder with name of module and then create 3 folders (infrastructure, application, domain) only folders
  const modulePath = path.join(rawPath, name);
  fs.mkdirSync(modulePath);

  const infrastructurePath = path.join(modulePath, 'infrastructure');
  fs.mkdirSync(infrastructurePath);

  const applicationPath = path.join(modulePath, 'application');
  fs.mkdirSync(applicationPath);

  const domainPath = path.join(modulePath, 'domain');
  fs.mkdirSync(domainPath);
}