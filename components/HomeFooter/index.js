export default function HomeFooter() {
    return (
        <footer className="mt-8">
            <div className="flex flex-col max-w-5xl px-2 mx-auto my-2 space-y-6">
            <article style={{backgroundColor: 'aliceblue'}} className="border border-blue-200 rounded p-4 sm:p-6 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 mt-8 mb-8">
                <h4 className="inline-flex items-center text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">Subscribe to receive new post
                </h4>
                <p className="mt-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">Sorry but this function currently not work :) 
                <br></br> If needed, you can contact me directly by email: <b>phatnguyen2499@gmail.com</b></p>
                <form className="mt-4 mb-2 text-sm sm:text-base flex items-center">
                    <input type="email" className="px-3 sm:px-4 py-2 mt-1 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 autofill:text-fill-gray-900 outline-none" placeholder="your@email.com" autoComplete="email" required="" aria-label="Enter your email" />
                        <button className="p-2" type="button">Subscribe</button>
                </form>
            </article>
            </div>
            <div className="mt-4 bg-code-block">
                <div className="flex flex-col justify-between w-full max-w-6xl p-4 mx-auto space-y-2 sm:flex-row sm:space-y-0">
                    <p className="flex flex-row items-baseline space-x-1">
                        <span className="text-sm">Contact me on</span>
                        <a
                            href="/"
                            className="text-base font-bold hover:underline"
                        >
                            Facebook
                        </a>
                        <span>,</span>
                        <a
                            href="/"
                            className="text-base font-bold hover:underline"
                        >
                            Linkedin
                        </a>
                    </p>
                    <a
                        className="flex flex-row items-baseline space-x-1 hover:underline"
                        href="/about"
                        target="_blank"
                    >
                        <span className="text-sm">Made by</span>
                        <div className="text-base font-bold">Phat Ng</div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
