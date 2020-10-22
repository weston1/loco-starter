import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import PageHeader from "../components/PageHeader";
import FeatureBlock from "../components/FeatureBlock";
import BubbleSection from "../components/BubbleSection";
import Goo from "gooey-react";

import Collapsible from "../components/collapsible";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout data-scroll-container>
    <SEO title="Home" />
    <PageHeader data-scroll-section></PageHeader>
    <FeatureBlock data-scroll-section></FeatureBlock>
    <BubbleSection />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Goo
      intensity="strong"
      style={{ height: "12rem", position: "relative", width: "12rem" }}
    >
      <div
        style={{
          background: "sandybrown",
          borderRadius: "50%",
          height: "4rem",
          width: "4rem",
          left: "2.5rem",
          top: "5.5rem",
          position: "absolute",
        }}
      />
      <div
        style={{
          background: "palevioletred",
          borderRadius: "50%",
          height: "4rem",
          width: "4rem",
          left: "5.5rem",
          top: "2.5rem",
          position: "absolute",
        }}
      />
    </Goo>
    <div class="pixel-text ">
      <span class="pixel-text__text">100</span>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Collapsible>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
      veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
      rem. Minima, adipisci modi!
    </Collapsible>
  </Layout>
);

export default IndexPage;
