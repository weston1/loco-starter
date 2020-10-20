import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import PageHeader from "../components/PageHeader";
import FeatureBlock from "../components/FeatureBlock";
import Collapsible from "../components/collapsible";
import SEO from "../components/seo";

const IndexPage = ({ backgroundImage }) => (
  <Layout data-scroll-container>
    <SEO title="Home" />
    <PageHeader backgroundImage={backgroundImage} data-scroll-section />
    <FeatureBlock data-scroll-section />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Collapsible>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
    </Collapsible>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;
