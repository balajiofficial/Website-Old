import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../commands/post";
import PageSEO from "../../components/seo";
import { components } from "../../content/blogComponents";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({
  postData,
}: {
  postData: {
    slug: string;
    time: string;
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    title: string;
    date: string;
    desc: string;
  };
}) {
  return (
    <Layout>
      <PageSEO title={postData.title + " - Post"} />
      <div>
        <div className="flex justify-center mt-2 mb-2">
          <div className="lg:w-3/4 md:w-11/12 w-screen">
            <div className="pb-2 border-b dark:border-gray-400 border-gray-300 sm:mb-3">
              <p className="text-5xl font-bold mt-3 text-center dark:text-white">
                {postData.title}
              </p>
              <div className="font-about mb-5 sm:mb-4 mt-1.5 flex justify-center text-gray-600 dark:text-gray-400">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
                  {postData.date}
                </p>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg font-about text-gray-500 dark:text-gray-300 ml-2">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="align-middle">{postData.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-about text-gray-500 dark:text-gray-300 text-lg mr-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/profile.png"
                        width={27}
                        height={27}
                        alt="Profile Pic"
                        className="rounded-full"
                      />
                      <p>Balaji Kannan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-2/3 md:w-5/6 w-screen">
            <div className="mb-3">
              <div className="mr-2 ml-2 text-lg dark:text-gray-300 leading-relaxed">
                <MDXRemote {...postData.source} components={components} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
