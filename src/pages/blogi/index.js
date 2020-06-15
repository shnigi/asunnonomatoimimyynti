import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Miksi et möisi asuntoasi itse? - Asunnon omatoimimyynti RA</title>
          <meta
            name="description"
            content="Kiinteistönvälittäjät pelottelevat omatoimimyynnin riskeistä. Me varoitamme kelvottomista
kiinteistönvälittäjistä."
          />
          <meta
            name="keywords"
            content="Välittäjä vai ei, Miksi välittäjä asuntokauppoihin, Välittäjä asuntokauppoihin"
          />
        </Helmet>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}>
          <div className="jumbotron-container">
            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
              Blogi
            </h1>
          </div>
        </div>


        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

// export const BlogisivuPageQuery = graphql`
//   query BlogIndexPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         description
//         keywords
//       }
//     }
//   }
// `
