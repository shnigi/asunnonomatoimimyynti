import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import logo from '../img/logo.png'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import MarkdownContent from '../components/MarkdownContent'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  helmet,
  subImage,
  secondheading,
  mainpitch,
  secondpitch,
  lastheading,
  thirdpitch,
}) => {
  const [state, setState] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => alert(error))
  }

  return (
  <div>
      {helmet || ''}
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
          {heading}
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
            {MarkdownContent(mainpitch)}
            <ul className="actions action-buttonwrapper">
              <li><a href="#asuntomyynti" className="button">Lue lisää</a></li>
            </ul>
          </section>
          <section className="checklist-container">
            <h3>Palvelun sisältö</h3>
            <ul className="checklist">
              <li><AnchorLink to="/palvelukuvaus#valokuvaus" title="Laadukkaat kuvat">Laadukkaat kuvat</AnchorLink></li>
              <li><AnchorLink to="/palvelukuvaus#videointi" title="Esittelyvideo">Esittelyvideo</AnchorLink></li>
              <li><AnchorLink to="/palvelukuvaus#myyntiesite" title="Myyntiesite">Myyntiesite</AnchorLink></li>
              <li><AnchorLink to="/hinnasto#lisapalvelut" title="Muut palvelut">Muut palvelut: katso tästä!</AnchorLink></li>
            </ul>
          </section>
        </div>
      </section>

      <div
        className="margin-top-0 jumbotron"
        style={{
          backgroundImage: `url(${
            !!subImage.childImageSharp ? subImage.childImageSharp.fluid.src : subImage
            })`,
        }}
        id="asuntomyynti">
        <div className="jumbotron-container">
          <h3
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          >
            {secondheading}
          </h3>
        </div>
      </div>

      <section className="wrapper style2 alt">
        <div className="container">
          <img src={logo} alt="Asunnon omatoimimyynti" className="frontpage-section-logo" />
          {MarkdownContent(secondpitch)}

          {!formSubmitted &&
          <form
            name="soittopyynto"
            method="post"
            className="soittopyynto"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="soittopyynto" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </div>

            <label className="label" htmlFor='puhelinnumero'>
              Jätä soittopyyntö:
            </label>
            <div className="control callmargin">
              <input
                className="input"
                type='text'
                name='puhelinnumero'
                onChange={handleChange}
                id='puhelinnumero'
                required
              />
            </div>
            <button className="button" type="submit">Lähetä</button>
          </form>
        }
          {formSubmitted && <strong>Soittopyyntö jätetty. Vastaamme sinulle mahdollisimman pian!</strong>}

        </div>
      </section>

      <section id="asuntomyynti" className="wrapper">
        <div className="container">
        <h2>{lastheading}</h2>
          <div className="columns">
            <div className="column is-two-thirds">
              {MarkdownContent(thirdpitch)}
              <ul className="actions action-buttonwrapper">
                <li><Link to="/otayhteytta" className="button">Ota yhteyttä</Link></li>
              </ul>
            </div>
            <div className="column is-one-quarter contact-person">
              <img src="img/ralf.jpg" alt="Ralf Ahlskog Asunnon omatoimimyynti" className="contact-person-image"></img>
              <strong>Ralf Ahlskog</strong>
              <p>Asunnon omatoimimyynti</p>
            </div>
          </div>
        </div>
      </section>
  </div>
)}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        subImage={frontmatter.subimage}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        secondheading={frontmatter.secondheading}
        mainpitch={frontmatter.mainpitch}
        secondpitch={frontmatter.secondpitch}
        lastheading={frontmatter.lastheading}
        thirdpitch={frontmatter.thirdpitch}
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
        subimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        keywords
        secondheading
        mainpitch
        secondpitch
        lastheading
        thirdpitch
      }
    }
  }
`
