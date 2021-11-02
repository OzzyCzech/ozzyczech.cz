import React, {Fragment} from 'react';
import {parse} from 'twemoji-parser';
import Tag from './Tag.js';
import md5 from 'md5';

// @see https://twemoji.maxcdn.com/2/test/preview.html

export default ({active, tags}) => {

	active = active || '';

	const Emoji = ({from}) => {
		const em = parse(from);
		return (
			<Fragment>
				<img src={em[0].url} alt={em[0].text} className="mr-3" width="20" height="20"/>
			</Fragment>
		);
	};

	const Link = (props) => {
		return (
			<Fragment>
				<a
					className={`rounded flex py-3 px-5 mb-1 block bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 ${active.toLowerCase() === props.href.toLowerCase() ? 'dark:bg-gray-700' : ''}`}
					href={props.href}>
					{props.emoji ? <Emoji from={props.emoji}/> : ''}{props.children}
				</a>
			</Fragment>
		);
	};

	const Gravatar = (props) => {
		return (
			<Fragment>
				<img src={`https://www.gravatar.com/avatar/${md5(props.email)}?s=128`} className="inline object-cover my-2 w-128 h-128 rounded-full" alt="Roman Ožana"/>
			</Fragment>
		);
	};

	return (<Fragment>
			<section>
				<div className="text-center">

					<a href="/" className="mb-3">
						<Gravatar email="roman@ozana.cz"/>
					</a>

					<h5 className="text-2xl">
						Hi, <a href="https://ozana.cz" target="_blank" className="hover:text-blue-500 hover:underline">I am Roman!</a>
					</h5>

					<div className="mb-3">
						<a href="https://github.com/OzzyCzech/" target="_blank" className="hover:text-blue-500 hover:underline">GitHub</a>
						<span className="mx-1">•</span>
						<a href="https://meta.stackoverflow.com/users/355316/" target="_blank" className="hover:text-blue-500 hover:underline">StackOverflow</a>
						<span className="mx-1">•</span>
						<a href="https://www.twitter.com/OzzyCzech" target="_blank" className="hover:text-blue-500 hover:underline">Twitter</a>
					</div>
				</div>
			</section>

			<form className="" method="get" id="search" hidden>
				<input className="form-control text-secondary w-100" id="q" name="q" type="search" placeholder="Search&hellip;" aria-label="Search"/>
			</form>

			<div className="mb-3 sm:hidden">
				<button type="button" className="sm:hidden rounded inline-flex justify-center py-3 px-5 mb-1 block bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 focus:outline-none w-full" aria-expanded="false">
					<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
					</svg>
					<svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="false">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>
			</div>

			<section className="mb-3 hidden md:block" aria-hidden="true">
				<Link href="/" emoji="🚀">Home</Link>
				<Link href="/photo" emoji="📷">Photography</Link>
				<Link href="/gear" emoji="⚙️">Gear</Link>
				<Link href="/awesome" emoji="💄">Awesome</Link>
				<Link href="/security" emoji="🔐">Security Checklist</Link>
				<Link href="/apple">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1000 1187.198"
						width="20"
						height="20"
						version="1.1"
						className="mr-3"
					>
						<path
							d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z"/>
					</svg>
					Apple
				</Link>
				<Link href="/js" emoji="🥕">Javascript</Link>
				<Link href="/books" emoji="📖">Books</Link>
				<Link href="/series" emoji="🎞">Series</Link>
				<Link href="/quotes" emoji="🪧">Quotes</Link>
			</section>

			{tags ? <section className="mb-3 hidden md:block text-center" aria-hidden="true">
				<nav>
					{[...tags.values()].map((tag, index) =>
						<Tag key={index} slug={tag.slug} title={tag.title} count={tag.count}/>,
					)}
				</nav>
			</section> : ''}

		</Fragment>
	);
}
