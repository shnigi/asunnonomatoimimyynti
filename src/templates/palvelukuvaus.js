import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import kamera from "../img/kamera.jpeg"
import Link from 'gatsby-link'

export const PalvelukuvausTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
        <div className="jumbotron-container">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
        </div>
    </div>

      <section id="two" className="wrapper style2 alt">
        <div className="inner">
          <div className="spotlight">
            <div className="image">
              <img src={kamera} alt="" />
            </div>
            <div className="content">
              <h3>Valokuvat</h3>
              <p>Otamme kohteesta laadukkaat kuvat sisältä ja ulkoa. Saat vähintään 12 kuvaa, joista tehdään sekä paino-
              että nettiversiot. Isännöitsijältä tarvitsemme pohjapiirroksen, jonka käsittelemme tarvittaessa sellaiseen
              muotoon, että se voidaan liittää esimerkiksi netissä kuvien joukkoon.
              </p>
              <ul className="actions action-buttonwrapper">
                <li><a href="#" className="button alt">Referenssejä</a></li>
              </ul>
            </div>
          </div>
          <div className="spotlight">
            <div className="image">
              <img src={kamera} alt="" />
            </div>
            <div className="content">
              <h3>Video</h3>
              <p>Kuvaamme asuntosi läpikotaisin ja teemme aineistosta 1-2 minuutin mittaisen koosteen. Videoon sisältyy
                  myös ulkokuvaus.
              </p>
              <ul className="actions">
                <li><a href="#" className="button alt">Referenssejä</a></li>
              </ul>
            </div>
          </div>
          <div className="spotlight">
            <div className="image">
              <img src={kamera} alt="" />
            </div>
            <div className="content">
              <h3>Esite</h3>
              <p>Teemme houkuttelevan myyntiesitteen, jossa on napakka esittelyteksti sekä perustiedot kohteesta.
              Esitteessä on kuvia asunnosta, pohjapiirustus sekä muun muassa kohdenumero netissä olevaan
              ilmoitukseen. Esite on kaksipuoleinen A4.</p>
              <ul className="actions">
                <li><a href="#" className="button alt">Referenssi</a></li>
              </ul>
            </div>
          </div>
          <div className="spotlight">
            <div className="image">
              <img src={kamera} alt="" />
            </div>
            <div className="content">
              <h3>Ostotarjous</h3>
              <strong>Muut kaupantekoon tarvittavat asiakirjat</strong>
              <p>Internetistä löytyvät kaikki asunnon myyntiin tarvittavat asiakirjat. Suosittelemme käyttämään ensisijaisesti
              Suomen suurinta välityspalvelua eli Etuovi.comia. Sieltä saat myös kaikki tarvitsemasi asiakirjat
              kaupantekoon, kuten esisopimuslomakkeen, kauppakirjan ja valtakirjan. Vastaavia asiakirjoja ja asunnon
              omatoimisen myynnin oppaita löydät runsaasti myös muilta sivustoilta.</p>
              <ul className="actions">
                <li><a href="#" className="button alt">Ostotarjouksessa huomioitavaa!</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="toimintatapa" class="section wrapper">
        <h2>Toimintatapa</h2>
        <div className="toimintatapa-stepper">
          <p>Ota yhteys ja sovi tapaaminen. Kerro samalla etukäteen haluatko esimerkiksi myös ilmakuvia.</p>
          <p>Tapaaminen kohteessa. Toimeksiannon allekirjoitus.</p>
          <p>Haastattelu kohteen erityispiirteistä ym. seikoista, jotka eivät näy isännöitsijätodistuksessa.</p>
          <p>Still-kuvaus.</p>
          <p>Videokuvaus.</p>
          <p>Materiaalin työstö julkaisukelpoiseksi.</p>
          <p>Esitteen teko.</p>
          <p>Materiaalin luovutus sähköisesti ja myyntiesitteet tilattaessa myös paperisena.</p>
          <p>Tarvittaessa myynti-ilmoitusten laatiminen nettiportaaleihin.</p>
        </div>
      </section>

      <ul class="actions special">
        <li><Link to="/hinnasto"><a href="#" class="button alt">Hinnasto</a></Link></li>
      </ul>
  </div>
)

PalvelukuvausTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PalvelukuvausTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
