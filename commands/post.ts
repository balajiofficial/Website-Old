import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const postsDirectory = join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileNames = readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<{
  slug: string;
  time: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  title: string;
  date: string;
  desc: string;
}> {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);
  const reading_time = readingTime(content);
  const time =
    reading_time.minutes >= 1
      ? Math.ceil(reading_time.minutes) + " minutes"
      : Math.ceil(reading_time.minutes * 60) + " seconds";

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    slug,
    time,
    source,
    ...(data as {
      title: string;
      date: string;
      desc: string;
    }),
  };
}
