export function emoji(emoji) {
  return `<img class="inline-block w-6 h-6"
	             src="https://twemoji.maxcdn.com/v/latest/svg/${emoji.codePointAt(0).toString(16)}.svg"
	             alt="${emoji}"
	             draggable="false"/>`;
}