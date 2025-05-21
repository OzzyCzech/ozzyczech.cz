---
title: GitHub Activity chart with Astro
---

This guide shows how to easily create a **GitHub activity chart** using [Astro](https://astro.build/) and the
`react-activity-calendar` package. Such a chart visually displays
your [GitHub contributions](https://github.com/ozzyCzech) over the past year and is popular on developer personal sites.

By using the `react-activity-calendar` component, you can quickly integrate your contribution overview into an Astro
project, customize its appearance, and leverage the modern React ecosystem within Astro.

First, install the `react-activity-calendar` package and add React to your Astro project:

```shell
npx astro add react
yarn add react-activity-calendar
# nebo: npm install react-activity-calendar
```

There is also [free API](https://github.com/grubersjoe/github-contributions-api) for GitHub contributions:

```text
https://github-contributions-api.jogruber.de/v4/[YOUR NAME]?y=all
```

Then, create a new component file, e.g., `GitHubActivity.astro`, and add the following code:

```
---
import { ActivityCalendar, type ThemeInput } from "react-activity-calendar";

export type Activity = {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
};

export type Year = number | "last";
export const prerender = false;

export type ApiResponse = {
	total: {
		[year: number]: number;
		[year: string]: number;
	};
	contributions: Array<Activity>;
};

const response = await fetch("https://github-contributions-api.jogruber.de/v4/OzzyCzech?y=last");
const data = (await response.json()) as ApiResponse;

const gitHubTheme = {
	dark: [
		"#e1e5e8",
		"#aceebb",
		"#4ac26b",
		"#2da44e",
		"#116329",

	],
} satisfies ThemeInput;

const defaultLabels = {
	totalCount: "{{count}} contributions in the last year",
};
---

<div class="flex flex-col gap-8">
	<ActivityCalendar
		data={data.contributions}
		theme={gitHubTheme}
		maxLevel={4}
		labels={defaultLabels}
		colorScheme="dark"
	/>

	<div class="flex justify-end">
		<a
			href="https://github.com/OzzyCzech"
			class="flex items-center gap-2 hover:underline"
			target="_blank"
		>@ozzyczech</a>
	</div>
</div>
```

This code fetches the GitHub contributions data for the user `OzzyCzech` and displays it using the
`react-activity-calendar` component. The theme is set to dark mode, and the labels are customized to show the total
count of contributions in the last year.

Finally, you can use this component in your Astro pages or layouts like this:

```
---
import GitHubActivity from "../components/GitHubActivity.astro";
---
<GitHubActivity />
```

This will render the GitHub activity chart on your page. You can customize the component further by passing different
props or modifying the styles or theme as needed.