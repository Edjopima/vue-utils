import path from "path"
import fs from "fs"

const buildVueComponent = (name: string) => {
  return `<template>
  <div class="${name}"></div>
</template>

<script lang="ts">
import ${name} from './${name}'

export default ${name}
</script>

<style lang="scss" scoped>
@import './${name}.scss';
</style>
`
}

const buildScss = (name: string) => {
  return `.${name} {}`
}

const buildTs = (name: string) => {
  return `export default {
    name: '${name}'
}
`
}

export const buildComponent = (name: string, rawPath: string = './') => {
  // create a folder with name of component and then create 3 files (component, scss, ts)
  const componentPath = path.join(rawPath, name);
  fs.mkdirSync(componentPath);

  const component = buildVueComponent(name);
  fs.writeFileSync(path.join(componentPath, `${name}.vue`), component);

  const scss = buildScss(name);
  fs.writeFileSync(path.join(componentPath, `${name}.scss`), scss);

  const ts = buildTs(name);
  fs.writeFileSync(path.join(componentPath, `${name}.ts`), ts);
}