import {got} from 'got';

async function getSeriesHtml(match, movie) {
	const response = await got(`https://api.themoviedb.org/3/search/tv/?api_key=${process.env.TMDB_API_KEY}&query=${movie}`).json();

	return `<li class="text-center p-2 m-0 lg:w-1/4">
		<a href="https://www.themoviedb.org/tv/${response.results[0].id}" target="_blank" class="text-inherit">
			<img src="https://image.tmdb.org/t/p/w500${response.results[0].poster_path}" alt="${response.results[0].name}" class="!p-0 !my-2"/>
			<span>${response.results[0].name}</span>
		</a>
	</li>`;
}

export async function replaceSeries(str) {

	str = str.replace(/<ul>/ig, `<ul class="list-none !p-0 !m-0 flex flex-wrap justify-center">`)

	let regex = /<li>(.+)<\/li>/ig;
	const promises = [];
	str.replace(regex, (match, ...args) => {
		const promise = getSeriesHtml(match, ...args);
		promises.push(promise);
	});
	const data = await Promise.all(promises);
	return str.replace(regex, () => data.shift());
}