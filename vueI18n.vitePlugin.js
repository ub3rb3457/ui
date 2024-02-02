import vue from '@vitejs/plugin-vue'
import yaml from 'js-yaml'

const vueI18nPlugin = {
  name: 'vue-i18n',
  transform(code, id) {
    // if .vue file don't have <i18n> block, just return
    if (!/vue&type=i18n/.test(id)) {
      return
    }
    // parse yaml
    if (/\.ya?ml$/.test(id)) {
      code = JSON.stringify(yaml.load(code.trim()))
    }
    // mount the value on the i18n property of the component instance
    return `export default Comp => {
      Comp.i18n = ${code}
    }`
  },
}

export default {
  plugins: [vue(), vueI18nPlugin],
}
/* 
// Use i18n block in vue SFC <Demo.vue>
<i18n lang="yaml">
message: 'world'
fullWord: 'hello world'
</i18n>
// Using the i18n data in the component
<template>
  <div>{{ Demo.i18n.message }}</div>
</template>
*/