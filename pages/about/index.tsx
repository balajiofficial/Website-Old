import Layout from "../../layouts/pageLayout";
import Image from "next/image";
import { ReactElement } from "react";
import { aboutData } from "../../content/dataAbout";
import PageSEO from "../../components/seo";
import Typist from "../../components/typist";

export default function About(): ReactElement {
  return (
    <Layout>
      <PageSEO title="About" />
      <div className="dark:bg-gray-900">
        <div className="mb-5">
          <div className="flex justify-center mt-1.5 sm:mt-5">
            <Image
              src="/profile.png"
              alt="Profile"
              width={205}
              height={205}
              loading="eager"
              className="rounded-full"
            />
          </div>
          <div className="mt-3 flex justify-center text-center">
            <div className="text-4xl sm:text-5xl font-bold h-full bg-clip-text bg-linear-to-r from-rose-500 to-purple-500 dark:from-sky-500 dark:to-teal-500  text-transparent font-quicksand">
              <Typist />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div>
                <div className="mt-7 xl:mt-10">
                  <ul>
                    {aboutData.map(
                      (
                        e: { img: string; alt: string; title: string },
                        i: number,
                      ) => {
                        return (
                          <li
                            key={i}
                            className={"" + (i == 0 ? "" : " mt-2 sm:mt-4")}
                          >
                            <div className="md:flex md:items-center sm:mb-0 mb-5">
                              <div className="flex sm:flex-none justify-center mb-2 md:mb-0 ml-0 sm:ml-1">
                                <Image
                                  src={e.img}
                                  width={44}
                                  height={44}
                                  alt={e.alt}
                                  quality={50}
                                />
                              </div>
                              <div className="ml-3 mr-2 text-gray-600 dark:text-gray-400 font-about text-xl flex sm:flex-none justify-center">
                                <p className="text-center">{e.title}</p>
                              </div>
                            </div>
                          </li>
                        );
                      },
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
