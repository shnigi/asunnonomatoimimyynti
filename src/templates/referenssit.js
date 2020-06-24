import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import Gallery from 'react-photo-gallery'
import asunto1 from "../img/referenssit/asunto1/asunto1.jpg"
import asunto2 from "../img/referenssit/asunto1/asunto2.jpg"
import asunto3 from "../img/referenssit/asunto1/asunto3.jpg"
import asunto4 from "../img/referenssit/asunto1/asunto4.jpg"
import asunto5 from "../img/referenssit/asunto1/asunto5.jpg"
import asunto6 from "../img/referenssit/asunto1/asunto6.jpg"
import asunto7 from "../img/referenssit/asunto1/asunto7.jpg"
import asunto8 from "../img/referenssit/asunto1/asunto8.jpg"
import asunto9 from "../img/referenssit/asunto1/asunto9.jpg"
import asunto10 from "../img/referenssit/asunto1/asunto10.jpg"
import asunto11 from "../img/referenssit/asunto1/asunto11.jpg"
import asunto12 from "../img/referenssit/asunto1/asunto12.jpg"
import asunto13 from "../img/referenssit/asunto2/asunto1.jpg"
import asunto14 from "../img/referenssit/asunto2/asunto2.jpg"
import asunto15 from "../img/referenssit/asunto2/asunto3.jpg"
import asunto16 from "../img/referenssit/asunto2/asunto4.jpg"
import asunto17 from "../img/referenssit/asunto2/asunto5.jpg"
import asunto18 from "../img/referenssit/asunto2/asunto6.jpg"
import asunto19 from "../img/referenssit/asunto2/asunto7.jpg"
import asunto20 from "../img/referenssit/asunto2/asunto8.jpg"
import asunto21 from "../img/referenssit/asunto2/asunto9.jpg"
import asunto22 from "../img/referenssit/asunto2/asunto10.jpg"
import asunto23 from "../img/referenssit/asunto2/asunto11.jpg"
import asunto24 from "../img/referenssit/asunto2/asunto12.jpg"

const photos = [
  {
    src: asunto1,
    width: 4,
    height: 2
  },
  {
    src: asunto2,
    width: 4,
    height: 2
  },
  {
    src: asunto3,
    width: 2,
    height: 2
  },
  {
    src: asunto4,
    width: 4,
    height: 2
  },
  {
    src: asunto5,
    width: 4,
    height: 2
  },
  {
    src: asunto6,
    width: 2,
    height: 2
  },
  {
    src: asunto7,
    width: 2,
    height: 2
  },
  {
    src: asunto8,
    width: 2,
    height: 2
  },
  {
    src: asunto9,
    width: 2,
    height: 2
  },
  {
    src: asunto10,
    width: 4,
    height: 2
  },
  {
    src: asunto11,
    width: 2,
    height: 2
  },
  {
    src: asunto12,
    width: 4,
    height: 2
  }
];

const photos2 = [
  {
    src: asunto13,
    width: 4,
    height: 2
  },
  {
    src: asunto14,
    width: 4,
    height: 2
  },
  {
    src: asunto15,
    width: 2,
    height: 2
  },
  {
    src: asunto16,
    width: 2,
    height: 2
  },
  {
    src: asunto17,
    width: 4,
    height: 2
  },
  {
    src: asunto18,
    width: 4,
    height: 2
  },
  {
    src: asunto19,
    width: 4,
    height: 2
  },
  {
    src: asunto20,
    width: 4,
    height: 2
  },
  {
    src: asunto21,
    width: 4,
    height: 2
  },
  {
    src: asunto22,
    width: 4,
    height: 2
  },
  {
    src: asunto23,
    width: 4,
    height: 2
  },
  {
    src: asunto24,
    width: 4,
    height: 2
  }
];

export const ReferenssittPageTemplate = ({helmet}) => {
  return (
    <div>
      {helmet || ''}
    <section className="section" id="valokuvareferenssit">
      <div className="container">
        <h1>Valokuvat</h1>
          <Gallery photos={photos2} />
      </div>
    </section>
    <section id="asuntomyynti" className="wrapper style2 alt">
      <div className="container">
          <Gallery photos={photos} />
      </div>
    </section>
      <section className="section">
        <div className="container" id="videoreferenssit">
          <h1>Videot</h1>
          <div className="video-container">
            <iframe className="youtube-video" src="https://www.youtube.com/embed/bQMmLoj3MN8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/WVvJEBczvMc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

const ReferenssitPage = ({data}) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ReferenssittPageTemplate
        helmet={
          <Helmet>
            <title>{frontmatter.title}</title>
            <meta
              name="description"
              content={frontmatter.description}
            />
            <meta
              name="keywords"
              content={frontmatter.keywords}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default ReferenssitPage


export const ReferenssitPageQuery = graphql`
  query ReferenssitPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
