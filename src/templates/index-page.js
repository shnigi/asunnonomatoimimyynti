import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
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


      <section id="one" class="wrapper">
        <div className="inner split">
          <section>
            <h2>Asunnon omatoimisella myynnillä säästät tuhansia euroja!</h2>
            <p>Hei asunnon myyjä!</p>
            <p>Miksi maksaisit välittäjille asuntosi myymisestä tuhansia euroja, kun voit myydä sen pienellä vaivalla ja avustuksella itse.</p>
            <p>Asunnon omatoimimyyntipalvelu tarjoaa sinulle kaikki tarvittavat työkalut kämppäsi omatoimiseen myyntiin.</p>
            <ul className="actions action-buttonwrapper">
              <li><a href="#" className="button alt">Lue lisää</a></li>
            </ul>
          </section>
          <section className="checklist-container">
            <ul className="checklist">
              <li>Laadukkaat kuvat</li>
              <li>Esittelyvideon</li>
              <li>Myyntiesitteen</li>
            </ul>
          </section>
        </div>
      </section>

      <section id="two" className="wrapper style2 alt">
        <div className="inner">
          <div className="spotlight">
            <div className="image">
              <img src="images/pic01.jpg" alt="" />
						</div>
              <div className="content">
                <h3>Ipsum pharetra tempus</h3>
                <p>Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.</p>
                <ul className="actions">
                  <li><a href="#" className="button alt">Details</a></li>
                </ul>
              </div>
            </div>
            <div className="spotlight">
              <div className="image">
                <img src="images/pic02.jpg" alt="" />
						</div>
                <div className="content">
                  <h3>Magna consequat felis</h3>
                  <p>Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.</p>
                  <ul className="actions">
                    <li><a href="#" className="button alt">Details</a></li>
                  </ul>
                </div>
              </div>
              <div className="spotlight">
                <div className="image">
                  <img src="images/pic03.jpg" alt="" />
					      </div>
                  <div className="content">
                    <h3>Vitae placerat adipiscing</h3>
                    <p>Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.</p>
                    <ul className="actions">
                      <li><a href="#" className="button alt">Details</a></li>
                    </ul>
                  </div>
                </div>
                <ul className="actions special">
                  <li><a href="#" className="button alt">Ipsum magna tempus</a></li>
                </ul>
              </div>
			</section>




    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
              <div className="content">

                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
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
