import {got} from 'got';

async function getSeriesHtml(match, series) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&include_adult=true&query=${series}`;
  const response = await got(url).json();

  if (response?.results.length) {
    const result = response.results.filter((result) => result.name.toLowerCase() === series.toLowerCase()).shift() || response.results.shift();

    return `<li class="text-center p-2 m-0 w-1/2 md:w-1/3 lg:w-1/4">
			<a href="https://www.themoviedb.org/tv/${result.id}" target="_blank" class="text-inherit">
				<img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.name}" class="!p-0 !my-2"/>
				<span title="${series}">${result.name}</span>
			</a>
		</li>`;
  }
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