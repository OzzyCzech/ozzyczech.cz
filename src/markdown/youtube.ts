import { visit } from "unist-util-visit";
import type { Root, Link } from "mdast";

export default function youtube() {
  return (tree: Root) => {
    visit(tree, "link", (node: Link) => {
      if (URL.canParse(node.url)) {
        const video = new URL(node.url);
        if (video.hostname.endsWith("youtube.com")) {
          const id = video.searchParams.get("v");
          if (id) {
            (node as unknown as { type: string; value: string }).type = "html";
            (node as unknown as { type: string; value: string }).value =
              `<iframe src="https://www.youtube.com/embed/${id}?rel=0&controls=1" allowfullscreen style="aspect-ratio: 16 / 9; width: 100%; border: 0"></iframe>`;
          }
        }
      }
    });
  };
}
