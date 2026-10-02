/* eslint-disable @next/next/no-page-custom-font */
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
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap"
          }
          rel="stylesheet"
        />
        <link
          href={"https://fonts.googleapis.com/css2?family=Roboto&display=swap"}
          rel="stylesheet"
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          }
          rel="stylesheet"
        />
      </Head>
    </div>
  );
}
