import Layout from "../../layouts/pageLayout";
import { ReactElement } from "react";
import PageSEO from "../../components/seo";
import PostTab from "../../components/tab";
import pl1 from "../../components/skills/pl1";
import pl2 from "../../components/skills/pl2";
import pl3 from "../../components/skills/pl3";

export default function Skills(): ReactElement {
  return (
    <Layout>
      <PageSEO title="Skills" />

      <div className="mb-10">
        <div className="mt-3 sm:mt-10">
          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 md:w-2/3">
              <PostTab title="Programming Languages" description={pl1} />
              <PostTab title="Languages" description={pl2} />
              <PostTab title="Frameworks" description={pl3} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
