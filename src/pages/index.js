import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import A2HS from "../components/a2hs"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi jojiiiiyoung!!! {data.site.siteMetadata.description}</h1>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <A2HS />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      totalCount
    }
  }
`
