import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
// import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
}) => (
  <div>
    <div
      className="margin-top-0 jumbotron"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="jumbotron-container">
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        >
          {subheading}
        </h3>
      </div>
    </div>


      <section id="one" className="wrapper">
        <div className="inner split">
          <section>
            <h2>Asunnon omatoimisella myynnillä säästät tuhansia euroja!</h2>
            <p>Hei asunnon myyjä!</p>
            <p>Miksi maksaisit välittäjille asuntosi myymisestä tuhansia euroja, kun voit myydä sen pienellä vaivalla ja avustuksella itse.</p>
            <p>Asunnon omatoimimyyntipalvelu tarjoaa sinulle kaikki tarvittavat työkalut kämppäsi omatoimiseen myyntiin.</p>
            <p>Lisämaksusta otamme myös ilmakuvat ja syötämme tiedot haluamiisi
                internetin myyntikanaviin, kuten Etuovi.com, Tori.fi ja Oikotie.</p>
            <ul className="actions action-buttonwrapper">
              <li><a href="#asuntomyynti" className="button">Lue lisää</a></li>
            </ul>
          </section>
          <section className="checklist-container">
            <h3>Palvelun sisältö</h3>
            <ul className="checklist">
              <li>Laadukkaat kuvat</li>
              <li>Esittelyvideon</li>
              <li>Myyntiesitteen</li>
            </ul>
          </section>
        </div>
      </section>

      <section id="asuntomyynti" className="wrapper style2 alt">
        <div className="container">
        <h2>Mikä asuntomyynnissä on tärkeää?</h2>
        <p>Asuntomyynnissä tärkeintä on löytää potentiaalinen ostaja. Niitä tarvitaan vain yksi. Kun sinulla on hyvin
        tehdyt myynti-ilmoitukset ja esitteet, niin ostajat löytävät kohteesi. Hyvä ja hyvin markkinoitu kohde myy
        melkein itse itsensä.</p>
        <p>
        Sinun tehtäväsi on määrittää hinta, pyytää isännöitsijältä Isännöitsijäntodistus, Energiatodistus, Tilinpäätös,
        Korjaussuunnitelma sekä Pohjapiirustus. Ota sen jälkeen yhteys Asunnon omatoimimyyntiin ja sovi
        kuvaus/esittelypäivä. Saat sen jälkeen viikon sisällä tarvitsemasi materiaalit sähköpostiisi.
        </p>
        <p>
        Lisämaksusta postitamme sinulle myyntiesitteitä haluamasi määrän ja laadimme myynti-ilmoitukset
        haluamiisi kanaviin.
        </p>
        <p>
        Sen jälkeen sinun ei tarvitse muuta kuin odottaa potentiaalisten ostajien yhteydenottoa ja sopia näytöistä.
        Tarjoukset voit ottaa vastaan esimerkiksi Asunnon omatoimimyynnistä saamallasi lomakkeella. Kauppakirja
        ja kaupathan tehdään yleensä ostajan pankissa. Sitä ennen sinun tulee olla hyvissä ajoin yhteydessä omaan
        pankkiisi, jossa asuntosi saattaa olla esimerkiksi lainan vakuutena.
        </p>
        <p>
        Kiinteistövälittäjät väittävät olevansa ammattilaisia viestinnässä, kuvaamisessa, myymisessä ja lakiasioissa.
        Heillä on omien sanojensa mukaan yleensä jo valmiina myös laaja ostajapotentiaali. Jos uskot heidän olevan
        näin ylivertaisia, niin varaudu maksamaan jopa kymppitonnin palkkio. Jos sen sijaan arvelet tuntevasi itse
        paremmin oman asuntosi hyvät puolet ja ominaisuudet ja luotat markkinointiviestinnän ammattilaisen
        tuottamaan materiaaliin, niin myy itse! Älä siis heitä rahojasi kankkulan kaivoon, vaan ota yhteys Asunnon
        omatoimimyyntiin!
        </p>
        </div>
      </section>

      <section id="asuntomyynti" className="wrapper">
        <div className="container">
          <h2>Rohkeasti vaan toimeen!</h2>
          <p>Jokainen meistä osaa myydä! Korosta hyviä puolia, mutta ole myös rehellinen! Kuuntele ennemmin
          asiakasta ja vastaa kysyttäessä. Liian innokas myyminen on yleensä vain haitaksi. Kun sinulla on hyvää
          myyntimateriaalia tukenasi, puheet voi jättää vähemmälle. Kysy ihmeessä myös välittäjältä paljonko hän
          ottaa myyntipalkkiota ja mitä kaikkea sillä saat. Vertaa sen jälkeen hintoja ja laske erotus, jonka tulet
          säästämään! Ota siis rohkeasti yhteyttä Asunnon omatoimimyyntiin!</p>
          <ul className="actions action-buttonwrapper">
            <li><Link to="/otayhteytta#yhteyslomake" className="button">Ota yhteyttä</Link></li>
          </ul>
        </div>
      </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        subheading
        mainpitch {
          title
          description
        }
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
      }
    }
  }
`
