import Link from 'next/link'

export default function header() {
	return (
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
	)
}

