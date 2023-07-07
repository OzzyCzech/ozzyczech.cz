import {visit} from 'unist-util-visit';

export default function video(options = {}) {

  return tree => {
    visit(tree, 'link', (node) => {

      // YouTube video embed
      if (node.url.includes('youtube.com')) {
        const video = new URL(node.url);
        const id = video.searchParams.get('v');
        if (id) {
          node.type = 'html';
          node.value = `<div class="aspect-w-16 aspect-h-9"><iframe src="https://www.youtube.com/embed/${id}?rel=0&controls=1" allowfullscreen></iframe></div>`;
        }
      }
    });
  };
}