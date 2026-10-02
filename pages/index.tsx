/* eslint-disable @next/next/no-img-element */
import { ReactElement, ReactFragment } from "react";
import PageSEO from "../components/seo";
import IndexLayout from "../layouts/indexLayout";

export default function Home(): ReactElement<ReactFragment> {
  return (
    <IndexLayout>
      <PageSEO index />
      <div className="text-black dark:text-white">
        <div className="relative">
          <div className="min-h-[calc(100dvh-4rem)] pb-16 flex flex-col justify-center">
            <h1 className="dark:text-gray-100 flex justify-center text-center text-8xl sm:text-8xl pb-7 sm:pb-10 font-semibold font-about select-none">
              Balaji Kannan
            </h1>
            <div className="flex justify-center mt-8 md:mt-16">
              <div className="text-white dark:text-white flex md:justify-evenly w-auto md:w-11/12 lg:w-3/4 flex-col md:flex-row">
                <div className="pt-3 pb-3">
                  <a
                    href="https://github.com/balajiofficial"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <button className="bg-gray-800 hover:bg-black dark:bg-gray-300 dark:hover:bg-gray-200 dark:text-black dark:hover:shadow-gray-600 rounded-lg p-3 font-semibold h-14 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-150">
                      <div className="whitespace-nowrap">
                        <svg
                          height="32"
                          className="fill-current inline-block w-10 pr-1"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="32"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                          ></path>
                        </svg>
                        <p className="inline-block text-lg align-middle">
                          GitHub
                        </p>
                      </div>
                    </button>
                  </a>
                </div>
                <div className="pt-3 pb-3">
                  <a
                    href="https://www.linkedin.com/in/balaji-kannan-/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 dark:hover:shadow-gray-600 rounded-lg p-3 font-semibold h-14 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-150">
                      <div className="whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 34 34"
                          className="w-8 h-8 inline-block mr-1.5"
                        >
                          <g>
                            <path
                              d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </svg>
                        <p className="inline-block text-lg align-middle">
                          LinkedIn
                        </p>
                      </div>
                    </button>
                  </a>
                </div>
                <div className="pt-3 pb-3">
                  <a
                    href="/static/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <button className="bg-blue-800 hover:bg-blue-700 rounded-lg p-3 dark:hover:shadow-gray-600 font-semibold h-14 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 inline-block">
                        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
                        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                      </svg>

                      <p className="inline-block text-lg align-middle ml-1.5">
                        Resume
                      </p>
                    </button>
                  </a>
                </div>
                <div className="pt-3 pb-3">
                  <a href="mailto:balaji.kannan@tcu.edu">
                    <button
                      className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 dark:hover:from-pink-500 dark:hover:to-pink-600 dark:hover:shadow-gray-600 rounded-lg p-3 font-semibold h-14 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-150"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <p className="inline-block text-lg align-middle pl-1">
                        Email
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}
