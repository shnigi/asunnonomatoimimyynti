import React from 'react'
// import { Link } from 'gatsby'
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
// const photos = [
//   {
//     src: 'referenssit/asunto1/asunto1.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto2.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto3.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto4.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto5.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto6.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto7.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto8.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto9.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto10.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto11.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto1/asunto12.jpg',
//     width: 4,
//     height: 2
//   }
// ];

// const photos2 = [
//   {
//     src: 'referenssit/asunto2/asunto1.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto2.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto3.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto4.jpg',
//     width: 2,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto5.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto6.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto7.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto8.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto9.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto10.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto11.jpg',
//     width: 4,
//     height: 2
//   },
//   {
//     src: 'referenssit/asunto2/asunto12.jpg',
//     width: 4,
//     height: 2
//   }
// ];

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
