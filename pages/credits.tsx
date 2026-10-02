import { ReactElement } from "react";
import PageSEO from "../components/seo";
import Layout from "../layouts/pageLayout";
import PostLink from "../mappings/a";
import PostListItem from "../mappings/li";
import PostUnorderedList from "../mappings/ul";

export default function CreditsPage(): ReactElement {
  return (
    <Layout>
      <PageSEO title="Credits" />
      <div className="mb-3">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
              <p className="text-6xl sm:text-8xl font-extrabold mt-4 text-gray-900 dark:text-white">
                Credits
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-8">
          <div className="w-10/12 sm:w-3/4 lg:w-1/2 text-xl font-about text-gray-600 dark:text-gray-300">
            <p>
              The icons on this site have been used from the following sites
              -{" "}
            </p>
            <div className="mt-1">
              <PostUnorderedList>
                <PostListItem>
                  <PostLink href="https://heroicons.com/">Heroicons</PostLink>
                </PostListItem>
                <PostListItem>
                  <PostLink href="https://www.freepik.com/">Freepik</PostLink>
                </PostListItem>
                <PostListItem>
                  <PostLink href="https://feathericons.com/">
                    Feather Icons
                  </PostLink>
                </PostListItem>
              </PostUnorderedList>
            </div>
            <p>
              The site has been created using a{" "}
              <PostLink href="https://reactjs.org/">React.js</PostLink>{" "}
              framework called{" "}
              <PostLink href="https://nextjs.org/">Next.js</PostLink> and has
              been deployed on{" "}
              <PostLink href="https://vercel.com/">Vercel</PostLink>.
            </p>
            <p className="mt-1">
              It uses{" "}
              <PostLink href="https://tailwindcss.com">Tailwind CSS</PostLink>{" "}
              for styling.
            </p>
            <p className="mt-1">
              It uses a <PostLink href="https://prismjs.com/">Prism</PostLink>{" "}
              framework known as{" "}
              <PostLink href="https://github.com/FormidableLabs/prism-react-renderer">
                React Prism Renderer
              </PostLink>{" "}
              to highlight the syntax codes in blogs.
            </p>
            <p className="mt-1">
              Fonts have been imported from{" "}
              <PostLink href="https://fonts.google.com/">Google Fonts</PostLink>
              .
            </p>
            <p className="mt-1">The following fonts have been used - </p>
            <div className="mt-1">
              <PostUnorderedList>
                <PostListItem>
                  <PostLink href="https://github.com/microsoft/cascadia-code">
                    Cascadia Code
                  </PostLink>
                </PostListItem>
                <PostListItem>
                  <PostLink
                    href="https://fonts.google.com/specimen/Quicksand"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quicksand
                  </PostLink>
                </PostListItem>
                <PostListItem>
                  <PostLink href="https://fonts.google.com/specimen/Roboto">
                    Roboto
                  </PostLink>
                </PostListItem>
                <PostListItem>
                  <PostLink href="https://www.jetbrains.com/lp/mono/">
                    Jetbrains Mono
                  </PostLink>
                </PostListItem>
                <PostListItem>
                  <PostLink href="https://fonts.google.com/specimen/Inter">
                    Inter
                  </PostLink>
                </PostListItem>
              </PostUnorderedList>
            </div>
            <p>
              The blogs were written in{" "}
              <PostLink href="https://mdxjs.com/">Markdown JSX</PostLink> and
              converted to HTML using{" "}
              <PostLink href="https://github.com/hashicorp/next-mdx-remote">
                Next-MDX-Remote
              </PostLink>
              .
            </p>
            <p className="mt-1">
              The Particle animation has been created using a{" "}
              <PostLink href="https://particles.js.org/">Particles.js</PostLink>{" "}
              framework called{" "}
              <PostLink href="https://github.com/matteobruni/tsparticles#readme">
                React-tsParticles
              </PostLink>
              .
            </p>
            <p className="mt-1">
              The Source Code has been formatted using{" "}
              <PostLink href="https://prettier.io/">Prettier</PostLink> and
              linted using{" "}
              <PostLink href="https://eslint.org/">ESLint</PostLink>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
