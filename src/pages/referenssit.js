import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import Gallery from 'react-photo-gallery'


const photos = [
  {
    src: 'referenssit/asunto1/asunto1.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto2.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto3.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto4.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto5.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto6.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto7.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto8.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto9.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto10.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto11.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto1/asunto12.jpg',
    width: 4,
    height: 2
  }
];

const photos2 = [
  {
    src: 'referenssit/asunto2/asunto1.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto2.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto3.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto4.jpg',
    width: 2,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto5.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto6.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto7.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto8.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto9.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto10.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto11.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'referenssit/asunto2/asunto12.jpg',
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
          <Gallery photos={photos} />
      </div>
    </section>
    <section id="asuntomyynti" className="wrapper style2 alt">
      <div className="container">
          <Gallery photos={photos2} />
      </div>
    </section>
      <section className="section" id="videoreferenssit">
        <div className="container">
          <h1>Videot</h1>
          <div className="video-container">
            <iframe className="youtube-video" src="https://www.youtube.com/embed/NpEaa2P7qZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="youtube-video" src="https://www.youtube.com/embed/NpEaa2P7qZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

const ReferenssitPage = () => {
  return (
    <Layout>
      <ReferenssittPageTemplate
        helmet={
          <Helmet>
            <title>Asunnon omatoimimyynti RA - Referenssit</title>
            <meta
              name="description"
              content="referenssit"
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default ReferenssitPage

// export const HinnastoPageQuery = graphql`
//   query HinnastoPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `
