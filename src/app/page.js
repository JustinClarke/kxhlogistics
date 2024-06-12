import Image from "next/image";

export default function Home() {
	return (
		<main>
			<header class="text-gray-600 body-font">
				<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="delivery-van"><g><path fill="#0075f6" d="M31 17h7.82l2.27 5H31v-5z"></path><path fill="#0075f6" d="M45 29a1 1 0 0 1 0-2h2a2 2 0 0 0-1.23-1.5L42 24H30a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7.91c-.42-.91-.77-2-2.2-2H3a2 2 0 0 0-2 2v12h2a1 1 0 0 1 0 2H1v4a2 2 0 0 0 2 2h1a6 6 0 0 1 12 0h13a6 6 0 0 1 12 0h4a2 2 0 0 0 2-2v-4Zm-29.3-6.29C13.56 24.86 13.55 25 13 25a1 1 0 0 1-.71-1.71l.3-.29H8a1 1 0 0 1 0-2h4.59l-.3-.29a1 1 0 0 1 1.42-1.42l2 2a1 1 0 0 1-.01 1.42Z"></path><circle cx="35" cy="35" r="4" fill="#3f3f44"></circle><circle cx="10" cy="35" r="4" fill="#3f3f44"></circle><path fill="#3f3f44" d="M22 11H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zM6 11H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"></path></g></svg>
						{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
						</svg>

						<span class="ml-3 text-xl">KXH Logistics</span>
					</a>
					<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<a class="mr-5 hover:text-gray-900">First Link</a>
						<a class="mr-5 hover:text-gray-900">Second Link</a>
						<a class="mr-5 hover:text-gray-900">Third Link</a>
						<a class="mr-5 hover:text-gray-900">Fourth Link</a>
					</nav>
					<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</header>

			{/* Features */}
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
						<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
										<circle cx={6} cy={6} r={3} />
										<circle cx={6} cy={18} r={3} />
										<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
										<circle cx={12} cy={7} r={4} />
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border border-gray-200 p-6 rounded-lg">
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
									</svg>
								</div>
								<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
								<p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
							</div>
						</div>
					</div>
					<button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
				</div>
			</section>

			{/* CTA */}
			<section class="text-gray-600 body-font relative">
				<div class="absolute inset-0 bg-gray-300">
					<iframe width="100%" height="100%" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
				</div>
				<div class="container px-5 py-24 mx-auto flex">
					<div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
						<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
						<p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
						<div class="relative mb-4">
							<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
							<input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
						</div>
						<div class="relative mb-4">
							<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
							<textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
						</div>
						<button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
						<p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
					</div>
				</div>
			</section>

			<footer class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-800">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-800">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-800">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-800">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-800">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-800">First Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Second Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Third Link</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
								</li>
							</nav>
						</div>
					</div>
				</div>

				<div class="border-t border-gray-200">
					<div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
						<div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
							<div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
								<label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
								<input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
							</div>
							<button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
							<h4 class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
								<p class="lg:block hidden">waistcoat green juice</p>
							</h4>
						</div>
						<span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
							<a class="text-gray-500">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a class="ml-3 text-gray-500">
								<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a class="ml-3 text-gray-500">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a class="ml-3 text-gray-500">
								<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
									<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</a>
						</span>
					</div>
				</div>
				<div class="bg-gray-100">
					<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
							<a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
						</p>
						<span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
					</div>
				</div>
			</footer>
		</main>
	);
}
