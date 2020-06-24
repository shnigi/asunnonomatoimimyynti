import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import kamera from "../img/kamera.jpeg"
import video from "../img/video.jpeg"
import esite from "../img/esite.jpeg"
import asunto from "../img/asunto.jpeg"
import Link from 'gatsby-link'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const PalvelukuvausTemplate = ({
  image,
  helmet,
  heading,
  valokuvatteksti,
  asiakirjateksti,
  videoteksti,
  esiteteksti
}) => (
  <div>
      {helmet || ''}
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
            {heading}
          </h1>
        </div>
    </div>

      <section id="two" className="wrapper style2 alt">
        <div className="inner">
          <div className="spotlight" id="valokuvaus">
            <div className="image">
              <img src={kamera} alt="Asunnon valokuvaus" />
            </div>
            <div className="content">
              <h3>Valokuvat</h3>
              <p>{valokuvatteksti}
              </p>
              <ul className="actions action-buttonwrapper">
                <li>
                  <Link to="/referenssit" className="button">Referenssejä</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="spotlight" id="videointi">
            <div className="image">
              <img src={video} alt="Asunnon videointi" />
            </div>
            <div className="content">
              <h3>Video</h3>
              <p>{videoteksti}
              </p>
              <ul className="actions">
                <li>
                  <AnchorLink to="/referenssit" title="Referenssejä" className="button">Referenssejä</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="spotlight" id="myyntiesite">
            <div className="image">
              <img src={esite} alt="Myyntiesite asunnosta" />
            </div>
            <div className="content">
              <h3>Esite</h3>
              <p>{esiteteksti}</p>
              <ul className="actions">
                <li><a href={`referenssit/myyntiesite.pdf`} className="button" target="_blank" rel="noreferrer">Lataa esimerkki</a></li>
              </ul>
            </div>
          </div>
          <div className="spotlight" id="asiakirjat">
            <div className="image">
              <img src={asunto} alt="Asuntokaupan asiakirjat" />
            </div>
            <div className="content">
              <h3>Muut kaupantekoon tarvittavat asiakirjat</h3>
              <p>{asiakirjateksti}</p>
              <ul className="actions">
                <li>
                  <a href="https://www.etuovi.com/myyntiopas/asunnon-myynnin-valmistelu" className="button" target="_blank" rel="noreferrer">Myynnin valmistelu</a>
                </li>
                <li>
                  <a href="https://asunnot.oikotie.fi/vinkit-ja-oppaat/oppaat/asunnon-myyntiopas-myy-kotisi-hetkessa" className="button" target="_blank" rel="noreferrer">Myyntiopas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="toimintatapa" className="section wrapper">
        <div className="content">
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

          <ul className="actions align-center">
          <li><Link to="/hinnasto" className="button">Hinnasto</Link></li>
        </ul>
      </div>
      </section>
  </div>
)

PalvelukuvausTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const Palvelukuvaus = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PalvelukuvausTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        valokuvatteksti={frontmatter.valokuvatteksti}
        esiteteksti={frontmatter.esiteteksti}
        videoteksti={frontmatter.videoteksti}
        asiakirjateksti={frontmatter.asiakirjateksti}
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

Palvelukuvaus.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Palvelukuvaus

export const PalvelukuvausQuery = graphql`
  query Palvelukuvaus($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        keywords
        heading
        valokuvatteksti
        esiteteksti
        videoteksti
        asiakirjateksti
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
