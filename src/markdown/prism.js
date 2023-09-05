import {visit} from 'unist-util-visit';
import Prism from 'prismjs';
import 'prismjs/components/prism-ini.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-less.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-php-extras.js';
import 'prismjs/components/prism-markup-templating.js';
import 'prismjs/components/prism-yaml.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-docker.js';

export default function prism(options = {}) {
  return tree => visit(tree, 'code', (node, index, parent) => {

    let lang = node.lang || 'markdown';
    node.type = 'html';
    if (lang === 'shell') {
      lang = 'bash';
    }
    node.value = `<pre><code class="language-${lang}">${Prism.highlight(node.value, Prism.languages[lang], lang)}</code></pre>`;
  });
}