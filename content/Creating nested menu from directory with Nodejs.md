# Creating nested menu from directory with Nodejs

I would like to create a nested menu and show all files and directories (except hidden folders) in the selected directory with#nodejs 

```js
import {readdir} from 'node:fs/promises';
import {join, parse} from 'node:path';
import slugify from '@sindresorhus/slugify';  

export async function directoryMenu(dir) {  
 let menu = '';  
  
 for (const child of await readdir(dir, {withFileTypes: true})) {  
  if (!child.name.startsWith('.') && !child.name.startsWith('_')) {  
   if (child.isDirectory()) {  
    menu += `<li><button>${child.name}</button> ${await directoryMenu(dir + '/' + child.name)}</li>`;  
   } else if (child.isFile() && child.name.match(/\.md$/)) {  
    const name = parse(child.name).name;  
    const href = join(dir.replace(/^content\/?/, '/').toLowerCase(), slugify(name));  
    menu += `<li><a href="${href}">${name}</a></li>`;  
   }  
  }  
 }  
  
 return `<ul>${menu}</ul>`;  
}```

You can try it:

```js
console.log(await directoryMenu('content'));
```