import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const HinnastoPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <h1>Hinnat peruspaketille</h1>

        <div className="pricing-table">
          <div className="pricing-plan">
            <div className="plan-header">Yksiöt</div>
            <div className="plan-price"><span className="plan-price-amount selling-table-text-override"><span className="plan-price-currency">€</span>496</span></div>
            <div className="plan-items">
              <div className="plan-item">Valokuvat</div>
              <div className="plan-item">Video</div>
              <div className="plan-item">Esite</div>
            </div>
            <div className="plan-footer">
              <a href="#asuntomyynti" className="button alt is-fullwidth">Tilaa</a>
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
              <a href="#asuntomyynti" className="button alt is-fullwidth">Tilaa</a>
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
              <a href="#asuntomyynti" className="button alt is-fullwidth">Tilaa</a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
