# File exists in nodejs

There are two functions `fs.exists()` and `fs.existsSync()`. Function `fs.exists()` is [deprecated](https://nodejs.org/api/fs.html#fsexistspath-callback), but `fs.existsSync()` is not.
Everyone should use `fs.stat()` or `fs.access()` instead, these functions are part of Callback API and can be easily transform to the promise:  

```javascript
#!/usr/bin/env node --experimental-modules

import {access, constants} from 'fs';
import {homedir} from 'os';

let fileExists = s => new Promise(resolve => access(s, constants.F_OK, error => resolve(!error)));
const exists = await fileExists(`${homedir()}/Downloads/something.png`);
```

#nodejs 