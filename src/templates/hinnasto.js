import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const HinnastoPageTemplate = () => {
  return (
    <div>
    <section className="section">
      <div className="container">
        <h1>Hinnat peruspaketille</h1>

        <div className="pricing-table">
          <div className="pricing-plan">
            <div className="plan-header">Yksiöt</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency selling-table-text-override">€</span>496</span></div>
            <div className="plan-items">
              <div className="plan-item">Valokuvat</div>
              <div className="plan-item">Video</div>
              <div className="plan-item">Esite</div>
            </div>
            <div className="plan-footer">
              <Link to="/otayhteytta" className="button is-fullwidth">Tilaa</Link>
            </div>
          </div>

          <div className="pricing-plan">
            <div className="plan-header">Kaksiot</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency selling-table-text-override">€</span>620</span></div>
            <div className="plan-items">
              <div className="plan-item">Valokuvat</div>
              <div className="plan-item">Video</div>
              <div className="plan-item">Esite</div>
            </div>
            <div className="plan-footer">
              <Link to="/otayhteytta" className="button is-fullwidth">Tilaa</Link>
            </div>
          </div>

          <div className="pricing-plan">
            <div className="plan-header">Kolmiot ja suuremmat</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency selling-table-text-override">€</span>744</span></div>
            <div className="plan-items">
              <div className="plan-item">Valokuvat</div>
              <div className="plan-item">Video</div>
              <div className="plan-item">Esite</div>
            </div>
            <div className="plan-footer">
              <Link to="/otayhteytta" className="button is-fullwidth">Tilaa</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="asuntomyynti" class="wrapper style2 alt">
      <div className="container">
        <h2>Lisäpalvelut</h2>
          <ul class="checklist">
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

HinnastoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HinnastoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HinnastoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

HinnastoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HinnastoPage

export const HinnastoPageQuery = graphql`
  query HinnastoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
