import Layout from "../../layouts/pageLayout";
import Image from "next/image";
import { ReactElement } from "react";
import { content } from "../../content/dataProjects";
import PageSEO from "../../components/seo";

export default function Projects(): ReactElement {
  return (
    <Layout>
      <PageSEO title="Projects" />
      <div className="dark:bg-gray-900">
        <div className="pt-4 flex justify-center pl-0 pr-0 sm:pl-10 sm:pr-10 w-screen sm:w-auto">
          <div className="xl:w-10/12">
            {content.map((e, index) => {
              return (
                <div
                  className={`rounded-none sm:rounded-lg bg-linear-to-br ${
                    [
                      "from-sky-400 to-blue-700",
                      "from-yellow-400 to-yellow-700",
                      "from-pink-500 to-rose-700",
                      "from-purple-500 to-violet-600",
                      "from-green-500 to-green-700",
                    ][index % 5]
                  } mb-4 p-5`}
                  key={e.title}
                >
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="wrap-break-word">
                      <div className="flex justify-between">
                        <div>
                          <div className="wrap-break-word">
                            <p className="text-2xl font-semibold">{e.title}</p>
                          </div>
                          <p className="text-white text-sm font-normal">
                            {e.date}
                          </p>
                          <div className="mb-1">
                            <div className="flex flex-wrap">
                              {e.keywords.map((keyword: string) => {
                                return (
                                  <div
                                    className="mr-2 rounded-sm bg-sky-400 pl-1 pr-1 pt-0.5 pb-0.5 mt-1.5 font-semibold"
                                    key={keyword}
                                  >
                                    {keyword}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <p className="text-lg lg:mr-2 mr-0 font-about">
                            {e.desc}
                          </p>
                          <div className="flex pt-2">
                            <p className="font-semibold pr-1 text-gray-800">
                              Links :
                            </p>
                            {e.links.map((link, index_links) => {
                              return (
                                <div key={link.label} className="flex">
                                  <div className="text-gray-100 font-semibold inline-block">
                                    {index_links == 0 ? "" : ", "}
                                    <p className="hover:underline inline-block">
                                      <a
                                        href={link.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white"
                                      >
                                        {link.label}
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                      <div className="bg-transparent sm:bg-gray-300/50 p-0 md:p-7 lg:p-3 rounded-lg">
                        <Image
                          src={e.img}
                          alt={e.title}
                          width={1920}
                          height={1080}
                          quality={1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
