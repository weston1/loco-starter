import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import PageHeader from "../components/PageHeader"
import Collapsible from "../components/collapsible"
import SEO from "../components/seo"

const IndexPage = ({ backgroundImage }) => (
  <Layout data-scroll-container>
    <SEO title="Home" />
    <PageHeader backgroundImage={backgroundImage} data-scroll-section />
    <div className="col-lg-6">
      <h2>SCRATCH MADE // CANNABIS INFUSED</h2>
      <h1>DISTRICT EDIBLES</h1>
      <p>
        October is here. To kick off the season District Edibles is brining you
        a taste of blood.. orange. Only available for a limited time. Get yours
        today!
      </p>
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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <h3>FULLY ACTIVATED</h3>
    <p>
      With each District Edibles product, we want to help you Experience the
      Difference. The process starts with our fully-activated, refined cannabis
      oil. We never use raw oil or oil high in THCa. This ensures that your body
      is able to fully absorb the active cannabinoids without any cannabis
      taste.
    </p>
    <h3>SCRATCH MADE</h3>
    <p>
      Low in sugar, fat and gluten-free. District Edibles allows those with
      dietary restrictions to still enjoy a flavorful and effective edible
      experiences. At District Edibles our edibles are hand mixed in small
      batches ensuring a consistent flavor and dose in every batch.
    </p>
    <h3>QUALITY INGREDIENTS</h3>
    <p>
      Low in sugar, fat and gluten-free. District Edibles allows those with
      dietary restrictions to still enjoy a flavorful and effective edible
      experiences. Gluten free recipe using gelatin, for a traditional gummy
      experience. (Not a vegan recipe) Low sugar, containing safely under 3g per
      serving Low fat, containing under 10 calories per serving.
    </p>
  </Layout>
)

export default IndexPage
