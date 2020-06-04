import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export const HinnastoPageTemplate = ({helmet}) => {
  return (
    <div>
      {helmet || ''}
    <section className="section">
      <div className="container">
        <h1>Hinnat peruspaketille</h1>

        <div className="pricing-table">
          <div className="pricing-plan">
            <div className="plan-header">Yksiöt</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency selling-table-text-override">€</span>496</span></div>
            <div className="plan-footer">
                <Link to="/otayhteytta#yhteyslomake" className="button is-fullwidth">Tilaa</Link>
            </div>
          </div>

          <div className="pricing-plan">
            <div className="plan-header">Kaksiot</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency selling-table-text-override">€</span>620</span></div>
            <div className="plan-footer">
                <Link to="/otayhteytta#yhteyslomake" className="button is-fullwidth">Tilaa</Link>
            </div>
          </div>

          <div className="pricing-plan">
            <div className="plan-header">Kolmiot ja suuremmat</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency selling-table-text-override">€</span>744</span></div>
            <div className="plan-footer">
                <Link to="/otayhteytta#yhteyslomake" className="button is-fullwidth">Tilaa</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="asuntomyynti" className="wrapper style2 alt">
      <div className="container">
        <h2>Lisäpalvelut</h2>
          <ul className="checklist">
            <li>Ilmakuvat 100 €</li>
            <li>Myyntiesitteet tulostettuna ja postitettuna. Mustavalkoiset 1,5 € kpl. Neliväriesitteet 3 € kpl. + postimaksu.</li>
            <li>Ilmoitusten syöttäminen nettiportaaliin. 62 €/portaali. Lisäksi veloitetaan palveluntarjoajan veloittama
            summa, joka esimerkiksi Oikotiellä on 149 € (Toukokuu 2020).</li>
          </ul>
        <h2>Muut kustannukset</h2>
        <p>Kilometrikorvaus verohallinnon ohjeiden mukaisesti osoitteesta Pohjantähdentie 42 Helsinki.</p>
      </div>
    </section>
    </div>
  )
}

const HinnastoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HinnastoPageTemplate
        helmet={
          <Helmet>
            <title>{`${frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default HinnastoPage

export const HinnastoPageQuery = graphql`
  query HinnastoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
