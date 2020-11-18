import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Team from '../components/Team'
import { Helmet } from 'react-helmet'
import MarkdownContent from '../components/MarkdownContent'

export const YritysPageTemplate = ({ helmet, yritystitle, yritys }) => {
    return (
        <div>
            {helmet || ''}
            <section className="section">
                <div className="container">
                    <h1>{yritystitle}</h1>
                    <p>
                        {MarkdownContent(yritys)}
                    </p>
                </div>
            </section>

            <section id="lisapalvelut" className="wrapper style2 alt">
                <div className="container">
                    <Team />
                </div>
            </section>
        </div>
    )
}

const YritysPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <YritysPageTemplate
                yritystitle={frontmatter.yritystitle}
                yritys={frontmatter.yritys}
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

export default YritysPage

export const YritysPageQuery = graphql`
    query YritysPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                description
                keywords
                yritystitle
                yritys
            }
        }
}
`
