import Head from "next/head";

export default function PageSEO({ title = "", index = false }) {
  return (
    <div>
      <Head>
        {index ? (
          <title>Balaji Kannan</title>
        ) : (
          <title>{`${title} | Balaji Kannan`}</title>
        )}
      </Head>
    </div>
  );
}
