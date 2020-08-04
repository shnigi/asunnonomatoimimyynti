import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
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
                    <h2>Tiimi</h2>
                    <p>Ralf Ahlskog on palvelun perustaja, koulutukseltaan toimittaja, MKT, videoeditoija ja Digikoordinaattori.
                    Työtausta löytyy sanomalehdistä, isoista mainos- ja viestintätoimistoista sekä pitkästä
                    markkinointiviestintäalan yrittäjyydestä.</p>
                    <p>
                    Niki Ahlskog on tietojenkäsittelytieteen maisteri, valokuvaaja, videoeditoija, ohjelmistokehittäjä ja graafinen suunnittelija.
                    </p>
                    <p>
                    Neelia Ahlskog on koulutukseltaan markkinointiviestinnän tradenomi, hyvä kirjoittaja ja visuaalinen
                    suunnittelija.</p>
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
