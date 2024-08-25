import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <footer className=" border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 dark:text-white">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="uppercase font-extrabold dark:text-white ">More Info:</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-700 dark:text-slate-300 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline ">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-700 font-medium dark:text-slate-300">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/AayushyaKumar"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/aayushya-kumar-a604b8248" className="hover:underline">
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-700 font-medium dark:text-slate-300">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                   
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                       
                        <a href="https://in.linkedin.com/in/aayushya-kumar-a604b8248" className="dark:text-white text-slate-600">
                        <svg
  className="w-4 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.06 20.54H3.66V9H7.06v11.54zM5.36 7.63c-1.11 0-2.01-.9-2.01-2.01s.9-2.01 2.01-2.01c1.11 0 2.01.9 2.01 2.01s-.9 2.01-2.01 2.01zm14.99 12.91h-3.4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97v5.7h-3.4V9h3.27v1.57h.05c.46-.87 1.58-1.79 3.26-1.79 3.49 0 4.13 2.3 4.13 5.28v6.48z"/>
</svg>

                            
                        </a>

<a href="https://github.com/AayushyaKumar" className="dark:text-white text-slate-600">
<svg
  className="w-4 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.484 11.484 0 0 1 3.004-.404 11.486 11.486 0 0 1 3.004.404c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.478 5.921.43.37.813 1.096.813 2.207v3.293c0 .322.218.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg>


                            <span className="sr-only ">Discord community</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
