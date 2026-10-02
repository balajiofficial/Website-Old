import { useState } from "react";
import Link from "next/link";
import Layout from "../layouts/pageLayout";
import PageSEO from "../components/seo";
import { getSortedPostsData } from "../commands/allPosts";
import { search } from "../functions/search";

export function getStaticProps() {
  const data = getSortedPostsData();
  return {
    props: {
      data,
    },
  };
}

export default function PostPage({
  data,
}: {
  data: {
    slug: string;
    title: string;
    date: string;
    desc: string;
    time: string;
  }[];
}) {
  const [searchText, setSearchText] = useState("");

  return (
    <Layout>
      <PageSEO title="Posts" />

      <div className="mt-5">
        <div className="flex justify-center">
          <div className="w-11/12 md:w-2/3">
            <div>
              <div className="mb-3">
                <div>
                  <div className="relative max-w-lg">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 text-gray-900 dark:text-white bg-gray-100 border-2 border-transparent focus:border-cyan-500 rounded-md  dark:bg-gray-800 font-medium p-1 font-about "
                      placeholder="Search posts"
                      spellCheck={false}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute right-3 top-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                {data.map((post) => {
                  if (search(post, searchText)) {
                    return (
                      <div className="xl:w-3/4 lg:w-5/6 mt-7" key={post.slug}>
                        <div>
                          <div>
                            <Link
                              href={`/post/${post.slug}`}
                              className="text-2xl md:text-3xl font-extrabold text-black hover:text-sky-500 dark:text-white dark:hover:text-cyan-400"
                            >
                              {post.title}
                            </Link>
                            <div className="flex">
                              <div className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1">
                                {post.date}
                              </div>
                              <div className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1 mr-1 ml-1">
                                •
                              </div>
                              <div className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1">
                                {post.time}
                              </div>
                            </div>
                            <p className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400">
                              {post.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
