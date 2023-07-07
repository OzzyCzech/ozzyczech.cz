import {visit} from 'unist-util-visit';

/**
 * Check if string is a valid URL
 * @param string
 * @return {boolean}
 */
function isUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
}

export default function linkImages(options = {}) {
  return (tree, file) => {

    console.log(file);

    visit(tree, (node) => {

      //console.log(node);

      // // Wrap images in links if they are URLs
      // if (node?.title && isUrl(node.title)) {
      // 	const a = h('a', {href: node.title}, [node]);
      //
      // 	node = a;
      // 	console.log(a);
      // }

    });
  };
}